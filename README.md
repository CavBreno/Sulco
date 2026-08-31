# Sulco

Mini-loja virtual dedicada a discos essenciais da música brasileira. Projeto educacional e fictício — sem afiliação com gravadoras ou artistas.

## Stack

HTML5 + CSS3 + JavaScript puro + `products.json`, sem frameworks.

## Estrutura

```
index.html          página principal (vitrine)
products.json        catálogo de discos (fonte de dados)
css/style.css        estilos (tema único, escuro)
js/script.js          bootstrap: fetch do catálogo
js/render.js          criação dos cards e formatPrice
js/filters.js         busca e ordenação
assets/images/albums  capas dos discos
assets/images/logo    logo da loja
como-fiz/             página com o vídeo explicativo do projeto
```

## Rodando localmente

Como o catálogo é carregado via `fetch()`, abrir `index.html` diretamente pelo navegador (`file://`) não funciona. Sirva a pasta com um servidor estático simples, por exemplo:

```
npx serve .
```

ou a extensão "Live Server" do VS Code.
