// Ponto de entrada: busca o catálogo, monta os filtros dinamicamente
// e conecta os eventos de busca/filtro/ordenação à renderização.

let allProducts = [];

function applyFiltersAndRender() {
  const query = document.getElementById("search").value;
  const sortCriteria = document.getElementById("sort").value;

  let result = searchProducts(allProducts, query);
  result = sortProducts(result, sortCriteria);

  renderProducts(result);
}

function setupFilters() {
  document.getElementById("search").addEventListener("input", applyFiltersAndRender);
  document.getElementById("sort").addEventListener("change", applyFiltersAndRender);
}

async function loadProducts() {
  try {
    const response = await fetch("./products.json");

    if (!response.ok) {
      throw new Error("Não foi possível carregar o catálogo.");
    }

    allProducts = await response.json();

    setupFilters();
    applyFiltersAndRender();
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
    document.getElementById("catalogo").innerHTML =
      "<p class='catalog__empty'>Não foi possível carregar o catálogo agora. Tente novamente mais tarde.</p>";
  }
}

loadProducts();
