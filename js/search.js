export function initSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    // Placeholder: futuramente implementar busca em JSON
    console.log('Busca:', query);
  });
}