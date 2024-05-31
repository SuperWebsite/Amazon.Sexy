// JavaScript code for adding products to cart
document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Product added to cart!');
    });
  });
});
