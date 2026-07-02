import { useEffect, useRef, useState } from 'react';
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

// Elements the drawer's focus trap should cycle between.
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), ' +
  'textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openId, setOpenId] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeAudience, setActiveAudience] = useState('particuliers');
  const menuBtnRef = useRef(null);
  const searchBtnRef = useRef(null);
  const searchInputRef = useRef(null);
  const drawerRef = useRef(null);
  const drawerCloseRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenId(null);
    menuBtnRef.current?.focus();
  };

  const closeSearch = () => {
    setSearchOpen(false);
    searchBtnRef.current?.focus();
  };

  // Close on Escape (RGAA keyboard operability)
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') {
        // Close only the top-most overlay per press so a single Escape
        // never dismisses more than one layer at a time.
        if (menuOpen) closeMenu();
        else if (searchOpen) closeSearch();
      }

      // Trap focus inside the drawer while it acts as a modal dialog.
      // The backdrop button lives outside drawerRef and is intentionally
      // tabIndex={-1} (mouse/touch dismissal only, kept out of Tab order).
      if (e.key === 'Tab' && menuOpen && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll(FOCUSABLE_SELECTOR);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen, searchOpen]);

  // Lock scroll while drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Move focus into the modal drawer when it opens
  useEffect(() => {
    if (menuOpen) drawerCloseRef.current?.focus();
  }, [menuOpen]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [searchOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        {/* Menu trigger */}
        <button
          type="button"
          ref={menuBtnRef}
          className={styles.menuBtn}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((v) => !v)}
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
            onClick={() => (searchOpen ? closeSearch() : setSearchOpen(true))}
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
      <div id="site-search" className={styles.search} hidden={!searchOpen}>
        <form className={`container ${styles.searchForm}`} role="search" action="/recherche">
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

      {/* Navigation drawer (modal: backdrop blocks interaction with the rest of the page) */}
      <div
        id="primary-navigation"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        hidden={!menuOpen}
      >
        <div className={styles.drawerHead}>
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
        <button
          type="button"
          tabIndex={-1}
          className={styles.backdrop}
          aria-label="Fermer le menu"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
