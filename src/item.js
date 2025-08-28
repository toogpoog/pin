import "./style.css";

const render = () => {
  console.log("Rendering item page");
  const id = new URLSearchParams(window.location.search).get("id");
  if (!id) return;
  const itemId = parseInt(id);

  const items = JSON.parse(localStorage.getItem("items")) || [];
  const item = items.find((i) => i.id === itemId);
  if (!item) return;

  console.log("Rendering item:", item);
  const itemName = document.querySelector("[data-item-name]");
  if (itemName) itemName.textContent = item.name;

  const itemImage = document.querySelector("[data-item-image]");
  if (itemImage) itemImage.src = item.image;
};

document.addEventListener("DOMContentLoaded", () => {
  render();
});
