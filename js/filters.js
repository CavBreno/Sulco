// Responsável pela busca e pela ordenação.
// Sempre trabalha sobre uma cópia dos dados originais — nunca altera o array carregado do products.json.

function searchProducts(products, query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return products;
  }

  return products.filter((product) => {
    const title = product.title.toLowerCase();
    const artist = product.artist.toLowerCase();
    return title.includes(normalizedQuery) || artist.includes(normalizedQuery);
  });
}

function sortProducts(products, criteria) {
  const sorted = [...products];

  switch (criteria) {
    case "year-asc":
      return sorted.sort((a, b) => a.year - b.year);
    case "year-desc":
      return sorted.sort((a, b) => b.year - a.year);
    case "artist":
      return sorted.sort((a, b) => a.artist.localeCompare(b.artist, "pt-BR"));
    case "title":
    default:
      return sorted.sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));
  }
}
