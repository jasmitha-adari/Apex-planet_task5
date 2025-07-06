function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

// Display Cart Items on cart.html
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  cartContainer.innerHTML = "";

  let total = 0;

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "0";
    return;
  }

  cartItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px;">
        <div>
          <strong>${item.name}</strong><br>
          <small>₹${item.price}</small>
        </div>
      </div>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(div);
    total += item.price;
  });

  cartTotal.textContent = total;
}

// Remove item
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart(); // re-render cart
}

// Checkout placeholder
function checkout() {
  alert("This is a demo site. Checkout functionality is not enabled.");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

// Auto-load if on cart page
if (window.location.pathname.includes("cart.html")) {
  window.addEventListener("DOMContentLoaded", loadCart);
}