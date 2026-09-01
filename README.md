# Sulco

Mini-loja virtual dedicada a discos essenciais da música brasileira. Projeto educacional e fictício — sem afiliação com gravadoras ou artistas.

## Funcionalidades

- Catálogo carregado dinamicamente via `fetch()` a partir de `products.json` (headless commerce em miniatura: o JSON é a fonte de dados, o JavaScript monta a vitrine).
- Busca por título ou artista, com ordenação por nome, artista ou ano.
- Fallback de imagem para capas indisponíveis.
- Página [`/como-fiz`](./como-fiz) com vídeo explicando o processo de construção do projeto.

## Stack

HTML5 + CSS3 + JavaScript puro, sem frameworks. Catálogo servido como JSON estático (`products.json`).

## Estrutura
index.html página principal (vitrine)
products.json catálogo de discos (fonte de dados)
css/style.css estilos (tema único, escuro)
js/script.js bootstrap: fetch do catálogo e ligação dos filtros
js/render.js criação dos cards, skeleton loading e formatPrice
js/filters.js busca e ordenação
assets/images/albums capas dos discos
assets/images/logo logo da loja
assets/videos vídeo explicativo usado em /como-fiz
como-fiz/ página com o vídeo explicando o projeto
