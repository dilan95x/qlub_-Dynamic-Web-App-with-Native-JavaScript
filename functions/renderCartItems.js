function renderCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cart"));
  const cartItemsContainer = document.getElementById("cartItems");

  if (cartItems && cartItems.length > 0) {
    cartItemsContainer.innerHTML = "";
    cartItems.forEach((item, index) => {
      const cartItemHtml = `
                    <div class="cart-item">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price"> Price: ${item.price} LKR</div>
                            <div class="cart-item-quantity">Quantity: ${item.quantity}</div>
                        </div>
                        <button class="custom-button-red delete-cart-item" onclick="deleteCartItem(${index})"> X </button>
                    </div>
                `;
      cartItemsContainer.innerHTML += cartItemHtml;
    });
  } else {
    cartItemsContainer.innerHTML = "<p>Your cart is empty</p>";
  }
}

renderCartItems();
