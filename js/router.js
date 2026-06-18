export function initRouter() {
  // Para navegação SPA suave (apenas se todas as páginas usarem o mesmo layout)
  // No caso das demos, são páginas independentes, então mantemos comportamento padrão.
  // Esta função pode ser expandida futuramente.

  // Gerenciar cliques em links internos para não recarregar completamente (opcional)
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    // Ignorar links que apontam para arquivos .html ou para fora do domínio
    const href = link.getAttribute('href');
    if (href && !href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('#')) {
      link.addEventListener('click', (e) => {
        // Se o link for para uma página HTML completa, permitir navegação normal
        // Para links que deveriam ser tratados pelo SPA, implementar lógica aqui
        // Por simplicidade, não interceptamos.
      });
    }
  });

  console.log('Router initialized (demos supported).');
}