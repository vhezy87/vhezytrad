
fetch("products.json").then(res => res.json()).then(data => {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = data.map(p => `
    <div class="product">
      <img src="${p.img}" width="150" />
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <p><strong>${p.price}</strong></p>
      <a href="https://wa.me/6285710892184?text=Halo%20saya%20ingin%20beli%20${encodeURIComponent(p.title)}%20seharga%20${encodeURIComponent(p.price)}" target="_blank">Beli via WhatsApp</a>
    </div>
  `).join("");
});
