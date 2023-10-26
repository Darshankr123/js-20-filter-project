import products from "./products.js";

let filterProducts = [...products];

// display products

const productContainer = document.querySelector(".products-container");

const displayProducts = (everyPrducts) => {
  if (filterProducts.length < 1) {
    productContainer;
  }
  productContainer.innerHTML = everyPrducts.map(({ title, image, price }) => {
    return `
       <article class="product">
          <img src=${image} class="product-img img" alt="">
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>
    `;
  }).join('');
};
displayProducts(products);

// <img src=${image} class="product-img img" alt="">

// filter products

const form = document.querySelector(".input-form");
const input = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  const value = input.value;
  filterProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(value);
  });

  displayProducts(filterProducts);
});

// filter buttons

const company = document.querySelector(".companies");

const displayButtons = () => {
  const productBtns = products.map((product) => {
    return product.company;
  });
  const filterButtons = ["all", ...new Set(productBtns)];
  company.innerHTML = filterButtons
    .map((item) => {
      return `<button class="company-btn" data-id="${item}">${item}</button>`;
    })
    .join("");

};
displayButtons();

// filter products

company.addEventListener('click',(e)=>{
    const category = e.target.dataset.id;

    filterProducts = products.filter((product)=>{
        return product.company.toLowerCase().includes(category)
    })

    displayProducts(filterProducts);
    if(category === 'all'){
        displayProducts(products);
    }
})
