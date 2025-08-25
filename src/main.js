import "./style.css";

const globalItems = [
  { id: 1, name: "My first item" },
  { id: 2, name: "My second item" },
  { id: 3, name: "Wow" },
  { id: 4, name: "Another item" },
  { id: 5, name: "Last item" },
  { id: 6, name: "Extra item" },
  { id: 7, name: "Item 7" },
  { id: 8, name: "Item 8" },
  { id: 9, name: "Item 9" },
  { id: 10, name: "Item 10" },
  { id: 11, name: "Item 11" },
  { id: 12, name: "Item 12" },
  { id: 13, name: "Item 13" },
  { id: 14, name: "Item 14" },
  { id: 15, name: "Item 15" },
];

const renderItem = (item) => {
  const itemDiv = document.createElement("div");

  const img = document.createElement("img");
  const w = 100;
  const h = 100;
  img.width = w;
  img.height = h;

  itemDiv.className = `flex flex-col justify-center items-center gap-2 w-[100px] bg-orange-200`;

  img.src = `https://placehold.co/${img.height}x${img.width}`;
  img.alt = "icon";
  itemDiv.appendChild(img);
  const h2 = document.createElement("h2");
  h2.className = "text-center";
  h2.textContent = item.name;
  itemDiv.appendChild(h2);
  return itemDiv;
};

document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.querySelector("[data-item-list]");
  if (!itemList) return;

  const x = globalItems.map(renderItem);
  itemList.replaceChildren(...x);
});
