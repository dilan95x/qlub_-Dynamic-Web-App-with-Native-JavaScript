if (window.location.pathname === "/dashboard/index.html") {
  async function loadProducts() {
    //
    const data = new XMLHttpRequest();
    data.open("GET", "../data/products.json", true);
    data.send();

    data.onload = () => {
      if (data.status === 200) {
        const response = JSON.parse(data.responseText);

        const productsHtml = response.map((product) => {
          return `<div class="product-card" key="${product.name}">
         <div class="product-image">
             <img src="${
               !!product.image
                 ? product.image
                 : "../images/imagePlaceholder.png"
             }" alt="${product.name}">
         </div>
         <div class="product-info">
             <h2 class="product-title">${product.name}</h2>
             <p class="product-description">${product.description}</p>
             <p class="product-price">${product.price} LKR</p>
             <button class="add-to-cart-button-blue .${product.name}" 
             onclick='addToCart({name: "${product.name}", price: "${
            product.price
          }", image: "${
            !!product.image ? product.image : "../images/imagePlaceholder.png"
          }", description: "${product.description}", quantity: 1})'
             >Add to cart +</button>
         </div>
     </div>`;
        });

        const productCard = document.querySelector(".products-container");
        productCard.innerHTML = productsHtml;
      } else {
        alert("Error fetching product data, please refresh the page");
      }
    };
  }

  loadProducts();
}
