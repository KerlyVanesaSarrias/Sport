function openSidebar() {
    document.getElementById("mySidebar").style.width = "320px";
    document.getElementById("overlay").style.display = "block";
  }
  
  function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
  }
  

  fetch('/components/header.html')
  .then(res => res.text())
  .then(data => {
    const header = document.getElementById('header');
    if (header) header.innerHTML = data;
  });

fetch('/components/footer.html')
  .then(res => res.text())
  .then(data => {
    const footer = document.getElementById('footer');
    if (footer) footer.innerHTML = data;
  });

  
  fetch('/pages/kerly.html')
  .then(res => res.text())
  .then(data => {
    const inicio = document.getElementById('inicio');
    if (inicio) inicio.innerHTML = data;
  });

  fetch('/pages/fernando.html')
  .then(res => res.text())
  .then(data => {
    const acesoria = document.getElementById('acesoria');
    if (acesoria) acesoria.innerHTML = data;
  });

  fetch('/pages/Steph.html')
  .then(res => res.text())
  .then(data => {
    const maquinas = document.getElementById('maquinas');
    if (maquinas) maquinas.innerHTML = data;
  });

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function openCartSidebar() {
    document.getElementById("cartSidebar").classList.add("active");
    renderCart();
  }
  
  function closeCartSidebar() {
    document.getElementById("cartSidebar").classList.remove("active");
  }
  
  function addToCart(name, price, img) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, price, img, qty: 1 });
    }
    saveCart();
    openCartSidebar();
  }
  
  function increaseQty(index) {
    cart[index].qty += 1;
    saveCart();
  }
  
  function decreaseQty(index) {
    if (cart[index].qty > 1) {
      cart[index].qty -= 1;
    } else {
      cart.splice(index, 1);
    }
    saveCart();
  }
  
  function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
  }
  
  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
  
  function clearCart() {
    cart = [];
    saveCart();
  }
  
  function renderCart() {
    const container = document.querySelector(".cart-items");
    const totalText = document.querySelector(".total strong");
    container.innerHTML = "";
  
    let total = 0;
  
    cart.forEach((item, index) => {
      total += item.price * item.qty;
      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}" />
        <div class="item-info">
          <p><strong>${item.name}</strong></p>
          <p><b>${formatPrice(item.price)} COP</b></p>
          <p class="cantidad">
            Cantidad:
            <button onclick="decreaseQty(${index})">-</button>
            <span>${item.qty}</span>
            <button onclick="increaseQty(${index})">+</button>
          </p>
        </div>
        <i class="fa-solid fa-trash" onclick="removeItem(${index})"></i>
      `;
      container.appendChild(div);
    });
  
    totalText.textContent = `${formatPrice(total)} COP`;
  }
  
  function formatPrice(value) {
    return value.toLocaleString("es-CO");
  }
  
  document.querySelector(".clear-btn").addEventListener("click", clearCart);
  