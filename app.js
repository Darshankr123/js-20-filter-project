import products from "./products.js";

let filterdProducts = [...products];

const productContainer = document.querySelector(".products-container");

const displayProducts = () => {
  if (filterdProducts.length < 1) {
    productContainer.innerHTML = `<h5 class='err-message'>sorry there is no item in your search</h5>`;
    return;
  }
  productContainer.innerHTML = filterdProducts
    .map(({ id, title, image, price }) => {
      return `
       <article class="product" data-id=${id}>
          <img src=${image} class="product-img img" alt="">
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>
    `;
    })
    .join("");
};

// 

displayProducts();

// Text filter

const form = document.querySelector(".input-form");
const input = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  const value = input.value;
  filterdProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(value);
  });
  displayProducts();
});

// display buttons

const companiesBtn = document.querySelector(".companies");

const displayButtons = () => {
  const buttons = ['all',...new Set(products.map((product)=>product.company))]

  companiesBtn.innerHTML = buttons.map((company)=>{
    return `<button class="company-btn" data-id=${company}>${company}</button>`;
  }).join('')
};

displayButtons();

companiesBtn.addEventListener('click',(e)=>{
  const el = e.target;
  if(el.classList.contains){
    if(el.dataset.id === 'all'){
      filterdProducts = [...products];
    }
    else{
      filterdProducts = products.filter((product)=>product.company===el.dataset.id)
    }
    displayProducts(filterdProducts)
  }
})
