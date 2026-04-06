const produtos = [
  { nome: 'teclado', preco: 120 },
  { nome: 'mouse', preco: 40 },
  { nome: 'monitor', preco: 800 },
  { nome: 'cabo usb', preco: 15 },
]

const produtosFiltrados = produtos
.filter((produto) => produto.preco > 50)
.map((produto) => produto.nome.toUpperCase());

console.log(produtosFiltrados)