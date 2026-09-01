// Responsável por transformar a lista de produtos em cards no DOM.

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card__cover">
      <img
        src="${product.image}"
        alt="Capa do álbum ${product.title}, de ${product.artist}"
        loading="lazy"
        onerror="this.onerror=null; this.src='assets/images/albums/capa-indisponivel.svg';"
      >
    </div>
    <div class="card__info">
      <h3 class="card__title">${product.title}</h3>
      <p class="card__artist">${product.artist}</p>
      <p class="card__meta">${product.year} · ${product.category}</p>
      <p class="card__price">${formatPrice(product.price)}</p>
    </div>
  `;

  return card;
}

// Quantidade de cards fantasma exibidos antes do fetch responder,
// reservando a altura real do catálogo para evitar CLS no footer.
const SKELETON_COUNT = 10;

function createSkeletonCard() {
  const card = document.createElement("div");
  card.className = "card card--skeleton";

  card.innerHTML = `
    <div class="card__cover"></div>
    <div class="card__info">
      <div class="skeleton-line skeleton-line--title"></div>
      <div class="skeleton-line skeleton-line--artist"></div>
      <div class="skeleton-line skeleton-line--meta"></div>
    </div>
  `;

  return card;
}

function renderSkeleton() {
  const catalog = document.getElementById("catalogo");
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < SKELETON_COUNT; i++) {
    fragment.appendChild(createSkeletonCard());
  }

  catalog.appendChild(fragment);
}

function renderProducts(products) {
  const catalog = document.getElementById("catalogo");
  const resultCount = document.getElementById("result-count");

  catalog.innerHTML = "";

  if (products.length === 0) {
    catalog.innerHTML = "<p class='catalog__empty'>Nenhum disco encontrado com esses filtros.</p>";
  } else {
    const fragment = document.createDocumentFragment();
    products.forEach((product) => fragment.appendChild(createProductCard(product)));
    catalog.appendChild(fragment);
  }

  if (resultCount) {
    resultCount.textContent = `${products.length} disco${products.length === 1 ? "" : "s"} encontrado${products.length === 1 ? "" : "s"}`;
  }
}
