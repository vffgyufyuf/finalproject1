let cart = [];

function addToCart() {
  const select = document.getElementById("itemSelect");
  const item = select.value;

  cart.push(item);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });

  // Update hidden input for PHP
  document.getElementById("cartData").value = JSON.stringify(cart);
}

function toggleCart() {
  const cartBox = document.getElementById("cart");
  cartBox.classList.toggle("hidden");
}
