import products from "./products.js";

const productContainer = document.querySelector(".products-container");
const form = document.querySelector(".input-form");
const input = document.querySelector(".search-input");
const company = document.querySelector(".companies");

window.addEventListener("load", () => {
  let productsId = products.map((item) => {
    console.log(item.id);
  });
  let filterBtn = products.reduce(
    (acc, cur) => {
      if (!acc.contains(cur.company)) {
        acc.push(cur.company, cur.id);
      }

      return acc;
    },
    { compny: "all", id: "all" }
  );

  console.log(filterBtn);

  filterBtn = filterBtn
    .map((item) => {
      return `
          <button class="company-btn" data-id=${item.id}>${item}</button>
        `;
    })
    .join("");

  company.innerHTML = filterBtn;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  console.log(value);
  const filterProducts = products.filter((item) => {
    const category = item.company;
    if (category === value) {
      return item;
    }
  });

  displayItems(filterProducts);

  if (value === "all") {
    displayItems(products);
  }
});

function displayItems(products) {
  const prods = products
    .map((item) => {
      const { id, title, company, image, price } = item;
      return ` <article class="product">
          <img src=${image} class="product-img img" alt=""> 
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>`;
    })
    .join("");
  productContainer.innerHTML = prods;
}
