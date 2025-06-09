
let products = [];

function render() {
  const list = document.getElementById("product-list");
  list.innerHTML = products.map((p, i) => `
    <div>
      <b>${p.title}</b> - ${p.price}
      <button onclick="remove(${i})">Hapus</button>
    </div>
  `).join("");
}

document.getElementById("product-form").onsubmit = e => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const desc = document.getElementById("desc").value;
  const img = document.getElementById("img").value;
  const cat = document.getElementById("cat").value;
  products.push({ title, price, desc, img, cat });
  render();
};

function remove(i) {
  products.splice(i, 1);
  render();
}
render();
