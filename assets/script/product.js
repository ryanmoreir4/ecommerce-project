document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const product = {
        name: button.dataset.name,
        price: parseFloat(button.dataset.price).toFixed(2),
        image: button.dataset.image,
        quantity: 1,
      };

      let cart = localStorage.getItem("cart");
      cart = cart ? JSON.parse(cart) : [];

      const existingProductIndex = cart.findIndex(
        (item) => item.name === product.name
      );
      if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity++;
      } else {
        cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    });
  });
});
