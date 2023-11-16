const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll =document.querySelector('.filter-all')

function  formatCurrency(value){
  const newValue = value.toLocaleString('pt-br',{
    style: 'currency',
    currency:'BRL'
  })
  return newValue
}

function showAll(arrayProducts) {
  let myLi = ""

  arrayProducts.forEach(product => {
    myLi +=
      `
        <li>
            <img src= ${product.src} alt="Imagem do Hamburguer">
            <p>${product.name}</p>
            <p class="price">R$ ${formatCurrency(product.price)}</p>
        </li>
      `
  })
  list.innerHTML = myLi
}


function MapAll() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9
  }))
  showAll(newPrices)
}

function SumAll(){
  const totalValue = menuOptions.reduce( (acc, cur) => acc + cur.price, 0)

  list.innerHTML = 
  `
  <li>
  <img src="img/cart.png" alt="Imagem do carrinho de compras">
    <p class="price">O valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
  </li>
  ` 
}

function FilterAll(){
  const filterJustVegan = menuOptions.filter((product) => product.vegan === true)
  showAll(filterJustVegan)
}


buttonSumAll.addEventListener('click', SumAll)
buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', MapAll)
buttonFilterAll.addEventListener('click', FilterAll)