export function initAnalytics() {
  // Placeholder para Google Analytics ou eventos
  document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', () => {
      const event = el.dataset.track;
      console.log('[Analytics] Evento:', event);
      // Exemplo: gtag('event', event);
    });
  });
}