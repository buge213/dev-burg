const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapall = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");
const filterAll = document.querySelector(".filter-all");

function formatCurrency(value) {
  const newValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return newValue
}

function showAll(productarray) {
  let myLi = "";

  productarray.forEach((product) => {
    myLi += `
            <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
            
            </li>
        `;
  });

  list.innerHTML = myLi;
}
function mapAllItems() {
  const newPrice = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9, // dar 10% de desconto
  }));

  showAll(newPrice);
}

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

  list.innerHTML = `
    <li>
    <p>O valor total dos produtos é R$: ${formatCurrency(totalValue)}</p>
    </li>
    `;
}
function filterAllItems() {
  const filterJustVegan = menuOptions.filter((product) => product.vegan);
  showAll(filterJustVegan);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapall.addEventListener("click", mapAllItems);
sumAll.addEventListener("click", sumAllItems);
filterAll.addEventListener("click", filterAllItems);
