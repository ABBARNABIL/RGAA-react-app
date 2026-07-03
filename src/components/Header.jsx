import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './Header.module.css';
import Logo from './Logo.jsx';
import {
  IconSearch,
  IconUser,
  IconChevronDown,
  IconMenu,
  IconClose,
  IconArrowRight,
} from './Icons.jsx';
import { audiences, utilityLinks, mainMenu } from '../data/navigation.js';
import { useModalDialog } from '../utils/a11y.js';

const MENU_INERT_SELECTORS = ['main', 'footer'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openId, setOpenId] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeAudience, setActiveAudience] = useState('particuliers');
  const barRef = useRef(null);
  const drawerRef = useRef(null);
  const drawerCloseRef = useRef(null);
  const menuBtnRef = useRef(null);
  const searchBtnRef = useRef(null);
  const searchInputRef = useRef(null);
  const searchWasOpenRef = useRef(false);
  const menuInertRefs = useMemo(() => [barRef], []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setOpenId(null);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((isOpen) => {
      const nextOpen = !isOpen;
      if (nextOpen) setSearchOpen(false);
      return nextOpen;
    });
  };

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
  }, []);

  // Close search on Escape (RGAA keyboard operability)
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && searchOpen) closeSearch();
    }
    document.addEventListener('keydown', onKey, true);
    return () => document.removeEventListener('keydown', onKey, true);
  }, [closeSearch, searchOpen]);

  // Lock scroll while drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (searchOpen) {
      searchWasOpenRef.current = true;
      searchInputRef.current?.focus();
    } else if (searchWasOpenRef.current) {
      searchWasOpenRef.current = false;
      searchBtnRef.current?.focus();
    }
  }, [searchOpen]);

  useModalDialog({
    open: menuOpen,
    dialogRef: drawerRef,
    initialFocusRef: drawerCloseRef,
    onClose: closeMenu,
    inertRefs: menuInertRefs,
    inertSelectors: MENU_INERT_SELECTORS,
  });

  return (
    <header className={styles.header}>
      <div ref={barRef} className={`container ${styles.bar}`}>
        {/* Menu trigger */}
        <button
          type="button"
          ref={menuBtnRef}
          className={styles.menuBtn}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <IconMenu width={26} height={26} />
          <span className={styles.menuBtnLabel}>Menu</span>
        </button>

        {/* Logo */}
        <a href="/" className={styles.logoLink} aria-label="Malakoff Humanis, retour à l'accueil">
          <Logo />
        </a>

        {/* Audience pills */}
        <nav className={styles.audience} aria-label="Choix du profil">
          <ul>
            {audiences.map((a) => (
              <li key={a.id}>
                <a
                  href={a.href}
                  className={`${styles.pill} ${activeAudience === a.id ? styles.pillActive : ''}`}
                  aria-current={activeAudience === a.id ? 'page' : undefined}
                  onClick={() => setActiveAudience(a.id)}
                >
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            type="button"
            ref={searchBtnRef}
            className={styles.iconBtn}
            aria-expanded={searchOpen}
            aria-controls="site-search"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <IconSearch />
            <span className="visually-hidden">Rechercher sur le site</span>
          </button>
          <a
            className={styles.iconBtn}
            href="https://client.malakoffhumanis.com/"
            aria-label="Espace client"
          >
            <IconUser />
          </a>
        </div>
      </div>

      {/* Search drawer */}
      <div
        id="site-search"
        className={styles.search}
        hidden={!searchOpen}
        role="region"
        aria-labelledby="site-search-title"
      >
        <div className={`container ${styles.searchPanel}`}>
          <div className={styles.searchHead}>
            <h2 id="site-search-title" className={styles.searchTitle}>
              Recherche
            </h2>
            <button type="button" className={styles.drawerClose} onClick={closeSearch}>
              <IconClose width={18} height={18} />
              <span>Fermer</span>
            </button>
          </div>
        </div>
        <form
          className={`container ${styles.searchForm}`}
          role="search"
          aria-labelledby="site-search-title"
          action="/recherche"
        >
          <label htmlFor="q" className={styles.searchLabel}>
            Que recherchez-vous&nbsp;?
          </label>
          <div className={styles.searchRow}>
            <input
              ref={searchInputRef}
              id="q"
              name="q"
              type="search"
              placeholder="Mutuelle, remboursement, retraite…"
              autoComplete="off"
            />
            <button type="submit" className="btn">
              <IconSearch width={18} height={18} />
              Rechercher
            </button>
          </div>
        </form>
      </div>

      {/* Navigation drawer */}
      <div
        id="primary-navigation"
        ref={drawerRef}
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-labelledby="primary-navigation-title"
        tabIndex={-1}
      >
        <div className={styles.drawerHead}>
          <h2 id="primary-navigation-title" className="visually-hidden">
            Menu principal
          </h2>
          <Logo />
          <button
            type="button"
            ref={drawerCloseRef}
            className={styles.drawerClose}
            onClick={closeMenu}
          >
            <IconClose />
            <span>Fermer</span>
          </button>
        </div>

        <nav className={styles.drawerNav} aria-label="Navigation principale">
          <ul className={styles.accordion}>
            {mainMenu.map((item) => {
              const panelId = `acc-${item.id}`;
              const isOpen = openId === item.id;
              return (
                <li key={item.id} className={styles.accItem}>
                  <button
                    type="button"
                    className={styles.accTrigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId((c) => (c === item.id ? null : item.id))}
                  >
                    {item.label}
                    <IconChevronDown
                      width={20}
                      height={20}
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                    />
                  </button>
                  <div id={panelId} className={styles.accPanel} hidden={!isOpen}>
                    {item.columns.map((col) => (
                      <ul key={col.title} className={styles.accLinks}>
                        {col.items.map((sub) => (
                          <li key={sub.href}>
                            <a href={sub.href} onClick={closeMenu}>
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ))}
                    <a className="link-arrow" href={item.href} onClick={closeMenu}>
                      Voir tout {item.label}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>

          <ul className={styles.drawerUtility}>
            {utilityLinks.map((l) => (
              <li key={l.id}>
                <a href={l.href} onClick={closeMenu}>
                  <IconArrowRight width={16} height={16} />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="btn btn--lg" href="https://client.malakoffhumanis.com/">
            <IconUser width={18} height={18} />
            Mon Espace client
          </a>
        </nav>
      </div>

      {menuOpen && (
        <div
          className={styles.backdrop}
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
