import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export function getFocusable(container) {
  if (!container) return [];

  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
    (element) => !element.closest('[hidden], [inert], [aria-hidden="true"]'),
  );
}

export function useModalDialog({
  open,
  dialogRef,
  initialFocusRef,
  onClose,
  inertRefs = [],
  inertSelectors = [],
}) {
  const restoreFocusRef = useRef(null);
  const inertSelectorKey = JSON.stringify(inertSelectors);

  useEffect(() => {
    if (!open) return undefined;

    restoreFocusRef.current = document.activeElement;

    const dialog = dialogRef.current;
    const inerted = [];
    const inertTargets = [
      ...inertRefs.map((ref) => ref.current),
      ...inertSelectors.flatMap((selector) => Array.from(document.querySelectorAll(selector))),
    ];

    inertTargets.forEach((element) => {
      if (element && !dialog?.contains(element) && !element.hasAttribute('inert')) {
        element.setAttribute('inert', '');
        inerted.push(element);
      }
    });

    const focusTarget = initialFocusRef.current || getFocusable(dialog)[0] || dialog;
    const frame = window.requestAnimationFrame(() => focusTarget?.focus());

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = getFocusable(dialog);
      if (focusable.length === 0) {
        event.preventDefault();
        dialog?.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !dialog?.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener('keydown', onKeyDown);
      inerted.forEach((element) => element.removeAttribute('inert'));

      const restoreTarget = restoreFocusRef.current;
      if (restoreTarget?.isConnected) {
        window.requestAnimationFrame(() => restoreTarget.focus());
      }
    };
  }, [open, dialogRef, initialFocusRef, onClose, inertRefs, inertSelectorKey]);
}
