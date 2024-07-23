document.addEventListener("DOMContentLoaded", function () {
  const cartButton = document.querySelector(".btn-cart");
  const addToCartButtons = document.querySelectorAll(".btn-primary");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const buttonRect = button.getBoundingClientRect();
      const cartRect = cartButton.getBoundingClientRect();

      const startX = buttonRect.left + buttonRect.width / 2;
      const startY = buttonRect.top + buttonRect.height / 2;
      const endX = cartRect.left + cartRect.width / 2;
      const endY = cartRect.top + cartRect.height / 2;

      const circle = document.createElement("div");
      circle.classList.add("circle-animation");
      document.body.appendChild(circle);

      circle.style.left = `${startX}px`;
      circle.style.top = `${startY}px`;

      setTimeout(() => {
        circle.style.left = `${endX}px`;
        circle.style.top = `${endY}px`;
      }, 0);

      setTimeout(() => {
        circle.remove();
      }, 1000);
    });
  });
});
