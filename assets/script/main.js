// document.addEventListener("DOMContentLoaded", function () {
//   const cartButton = document.querySelector(".btn-cart");
//   const addToCartButtons = document.querySelectorAll(".add-to-cart");

//   addToCartButtons.forEach((button) => {
//     button.addEventListener("click", function (event) {
//       event.preventDefault();
//       const buttonRect = button.getBoundingClientRect();
//       const cartRect = cartButton.getBoundingClientRect();

//       const startX = buttonRect.left + buttonRect.width / 2;
//       const startY = buttonRect.top + buttonRect.height / 2;
//       const endX = cartRect.left + cartRect.width / 2;
//       const endY = cartRect.top + cartRect.height / 2;

//       const circle = document.createElement("div");
//       circle.classList.add("circle-animation");
//       document.body.appendChild(circle);

//       circle.style.left = `${startX}px`;
//       circle.style.top = `${startY}px`;

//       setTimeout(() => {
//         circle.style.left = `${endX}px`;
//         circle.style.top = `${endY}px`;
//       }, 0);

//       setTimeout(() => {
//         circle.remove();
//       }, 1000);

//       const card = this.closest(".card");
//       const product = {
//         image: card.querySelector(".card-image").src,
//         name: card.querySelector(".card-title").textContent,
//         price: card.querySelector("#card-price").textContent,
//       };

//       let cart = JSON.parse(localStorage.getItem("cart")) || [];
//       cart.push(product);
//       localStorage.setItem("cart", JSON.stringify(cart));

//       alert("Item adicionado ao carrinho!");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const product = {
        name: button.getAttribute("data-name"),
        price: button.getAttribute("data-price"),
        image: button.getAttribute("data-image"),
        quantity: 1, // Define a quantidade inicial como 1
      };

      let cart = localStorage.getItem("cart");

      if (cart) {
        cart = JSON.parse(cart);
        // Verifica se o item já está no carrinho
        const existingProductIndex = cart.findIndex(
          (item) => item.name === product.name
        );
        if (existingProductIndex > -1) {
          // Se já existe, incrementa a quantidade
          cart[existingProductIndex].quantity++;
        } else {
          cart.push(product);
        }
      } else {
        cart = [product];
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${product.name} foi adicionado ao carrinho!`);
    });
  });
});
