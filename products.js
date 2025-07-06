const products = [
  { name: "Classic White T-Shirt", category: "Clothing", price: 499, rating: 4, image: "images/white-tshirt.jpg" },
  { name: "Blue Denim Jeans", category: "Clothing", price: 899, rating: 5, image: "images/denim-jeans.jpg" },
  { name: "Black Hoodie", category: "Clothing", price: 1099, rating: 4, image: "images/black-hoodie.jpg" },
  { name: "Checked Casual Shirt", category: "Clothing", price: 799, rating: 4, image: "images/casual-shirt.jpg" },
  { name: "Women’s Floral Kurti", category: "Clothing", price: 749, rating: 5, image: "images/floral-kurti.jpg" },
  { name: "Sports Tracksuit", category: "Clothing", price: 1299, rating: 4, image: "images/tracksuit.jpg" },
  { name: "Cotton Sweatpants", category: "Clothing", price: 599, rating: 4, image: "images/sweatpants.jpg" },
  { name: "Unisex Bomber Jacket", category: "Clothing", price: 1499, rating: 5, image: "images/bomber-jacket.jpg" },
  { name: "Kids Cartoon T-Shirt", category: "Clothing", price: 399, rating: 4, image: "images/kids-tshirt.jpg" },
  { name: "Slim Fit Blazer", category: "Clothing", price: 1999, rating: 5, image: "images/blazer.jpg" },

  { name: "Wireless Earbuds", category: "Electronics", price: 1299, rating: 5, image: "images/earbuds.jpg" },
  { name: "Bluetooth Speaker", category: "Electronics", price: 899, rating: 4, image: "images/speaker.jpg" },
  { name: "Smartwatch", category: "Electronics", price: 1599, rating: 4, image: "images/smartwatch.jpg" },
  { name: "Android Smartphone", category: "Electronics", price: 6999, rating: 4, image: "images/smartphone.jpg" },
  { name: "USB-C Charging Cable", category: "Electronics", price: 299, rating: 3, image: "images/usb-c.jpg" },
  { name: "Gaming Keyboard", category: "Electronics", price: 1099, rating: 5, image: "images/keyboard.jpg" },
  { name: "Portable Power Bank", category: "Electronics", price: 999, rating: 4, image: "images/powerbank.jpg" },
  { name: "Noise Cancelling Headphones", category: "Electronics", price: 2499, rating: 5, image: "images/headphones.jpg" },
  { name: "Fitness Band", category: "Electronics", price: 899, rating: 4, image: "images/fitness-band.jpg" },
  { name: "1080p Web Camera", category: "Electronics", price: 1299, rating: 4, image: "images/webcam.jpg" },

  { name: "The Psychology of Money", category: "Books", price: 349, rating: 5, image: "images/psychology-money.jpg" },
  { name: "Atomic Habits", category: "Books", price: 399, rating: 5, image: "images/atomic-habits.jpg" },
  { name: "Rich Dad Poor Dad", category: "Books", price: 299, rating: 4, image: "images/rich-dad.jpg" },
  { name: "Wings of Fire", category: "Books", price: 349, rating: 5, image: "images/wings-of-fire.jpg" },
  { name: "The Subtle Art of Not Giving a F*ck", category: "Books", price: 349, rating: 4, image: "images/subtle-art.jpg" },
  { name: "Ikigai", category: "Books", price: 299, rating: 4, image: "images/ikigai.jpg" },
  { name: "Deep Work", category: "Books", price: 399, rating: 5, image: "images/deep-work.jpg" },
  { name: "Think and Grow Rich", category: "Books", price: 250, rating: 4, image: "images/think-rich.jpg" },
  { name: "The Alchemist", category: "Books", price: 299, rating: 4, image: "images/alchemist.jpg" },
  { name: "Harry Potter Box Set", category: "Books", price: 1299, rating: 5, image: "images/harry-potter.jpg" },

  { name: "Stainless Steel Water Bottle", category: "Home & Kitchen", price: 349, rating: 4, image: "images/water-bottle.jpg" },
  { name: "Decorative Wall Clock", category: "Home & Kitchen", price: 599, rating: 4, image: "images/wall-clock.jpg" },
  { name: "3-Piece Bedsheet Set", category: "Home & Kitchen", price: 799, rating: 5, image: "images/bedsheet.jpg" },
  { name: "Air-Tight Food Containers", category: "Home & Kitchen", price: 499, rating: 4, image: "images/containers.jpg" },
  { name: "LED Desk Lamp", category: "Home & Kitchen", price: 899, rating: 4, image: "images/desk-lamp.jpg" },
  { name: "Digital Alarm Clock", category: "Home & Kitchen", price: 699, rating: 3, image: "images/alarm-clock.jpg" },
  { name: "Premium Bath Towels", category: "Home & Kitchen", price: 499, rating: 5, image: "images/towels.jpg" }, 
  { name: "Microwave Oven Mitts", category: "Home & Kitchen", price: 399, rating: 3, image: "images/mitts.jpg" },
  { name: "Kitchen Knife Set", category: "Home & Kitchen", price: 699, rating: 4, image: "images/knife-set.jpg" },
  { name: "Foldable Study Table", category: "Home & Kitchen", price: 1499, rating: 4, image: "images/study-table.jpg" },

  { name: "Herbal Face Wash", category: "Beauty", price: 299, rating: 4, image: "images/face-wash.jpg" },
  { name: "Vitamin C Serum", category: "Beauty", price: 499, rating: 4, image: "images/vitamin-c-serum.jpg" },
  { name: "Hair Straightener", category: "Beauty", price: 999, rating: 5, image: "images/straightener.jpg" },
  { name: "Beard Grooming Kit", category: "Beauty", price: 749, rating: 4, image: "images/beard-kit.jpg" },
  { name: "Aloe Vera Gel", category: "Beauty", price: 249, rating: 3, image: "images/aloe-vera.jpg" },
  { name: "Moisturizing Body Lotion", category: "Beauty", price: 349, rating: 4, image: "images/lotion.jpg" },
  { name: "Hair Dryer", category: "Beauty", price: 899, rating: 4, image: "images/hair-dryer.jpg" },
  { name: "Perfume Spray Ocean Scent", category: "Beauty", price: 599, rating: 5, image: "images/perfume.jpg" },
  { name: "Lip Balm Set", category: "Beauty", price: 199, rating: 3, image: "images/lip-balm.jpg" },
  { name: "Compact Makeup Kit", category: "Beauty", price: 1299, rating: 5, image: "images/makeup-kit.jpg" },

  { name: "Rubik’s Cube", category: "Toys", price: 199, rating: 4, image: "images/rubiks-cube.jpg" },
  { name: "Remote Control Car", category: "Toys", price: 999, rating: 4, image: "images/rc-car.jpg" },
  { name: "Soft Teddy Bear", category: "Toys", price: 499, rating: 5, image: "images/teddy.jpg" },
  { name: "Wooden Puzzle Set", category: "Toys", price: 299, rating: 3, image: "images/puzzle.jpg" },
  { name: "Building Blocks for Kids", category: "Toys", price: 599, rating: 4, image: "images/blocks.jpg" }
];


const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const ratingFilter = document.getElementById("ratingFilter");
const priceFilter = document.getElementById("priceFilter");

const urlParams = new URLSearchParams(window.location.search);
const initialCategory = urlParams.get("category");
if (initialCategory) {
  categoryFilter.value = initialCategory;
}

function displayProducts(filtered = products) {
  productList.innerHTML = "";
  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <p>Rating: ${"⭐".repeat(product.rating)}</p>
      <button onclick='addToCart("${product.name}", ${product.price}, "${product.image}")'>Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function filterProducts() {
  const category = categoryFilter.value;
  const rating = parseInt(ratingFilter.value);
  const price = priceFilter.value;

  const filtered = products.filter(p => {
    const matchCategory = !category || p.category === category;
    const matchRating = !rating || p.rating >= rating;
    const matchPrice =
      !price ||
      (price === "low" && p.price < 500) ||
      (price === "mid" && p.price >= 500 && p.price <= 1000) ||
      (price === "high" && p.price > 1000);

    return matchCategory && matchRating && matchPrice;
  });

  displayProducts(filtered);
}

displayProducts();
if (initialCategory) filterProducts();
categoryFilter.addEventListener("change", filterProducts);
ratingFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);