document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const subtotalElement = document.getElementById("subtotal");
  const totalElement = document.getElementById("total");

  let cart = localStorage.getItem("cart");

  if (cart) {
    cart = JSON.parse(cart);
    renderCartItems(cart);
    updateTotals(cart);
  }

  function renderCartItems(cart) {
    cartItemsContainer.innerHTML = ""; // Clear the container before rendering items
    cart.forEach((item) => {
      const itemTotal = item.quantity * parseFloat(item.price);

      const itemElement = document.createElement("tr");
      itemElement.innerHTML = `
            <td>
              <div class="product">
                <img src="${item.image}" />
                <div class="info">
                  <div class="name">${item.name}</div>
                </div>
              </div>
            </td>
            <td>R$ ${parseFloat(item.price).toFixed(2)}</td>
            <td>
              <div class="qty">
                <button class="qty-minus"><i class="bx bx-minus"></i></button>
                <span>${item.quantity}</span>
                <button class="qty-plus"><i class="bx bx-plus"></i></button>
              </div>
            </td>
            <td>R$ ${itemTotal.toFixed(2)}</td>
            <td>
              <button class="remove"><i class="bx bx-x"></i></button>
            </td>
          `;

      cartItemsContainer.appendChild(itemElement);

      itemElement.querySelector(".remove").addEventListener("click", () => {
        cartItemsContainer.removeChild(itemElement);
        cart = cart.filter((cartItem) => cartItem.name !== item.name);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCartItems(cart);
        updateTotals(cart);
      });

      itemElement.querySelector(".qty-plus").addEventListener("click", () => {
        item.quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCartItems(cart);
        updateTotals(cart);
      });

      itemElement.querySelector(".qty-minus").addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity--;
          localStorage.setItem("cart", JSON.stringify(cart));
          renderCartItems(cart);
          updateTotals(cart);
        }
      });
    });
  }

  function updateTotals(cart) {
    let subtotal = 0;

    cart.forEach((item) => {
      subtotal += item.quantity * parseFloat(item.price);
    });

    subtotalElement.textContent = `R$ ${subtotal.toFixed(2)}`;
    totalElement.textContent = `R$ ${subtotal.toFixed(2)}`;
  }
});
