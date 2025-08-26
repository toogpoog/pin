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
  { id: 16, name: "Item 16" },
  { id: 17, name: "Item 17" },
  { id: 18, name: "Item 18" },
  { id: 19, name: "Item 19" },
  { id: 20, name: "Item 20" },
  { id: 21, name: "Item 21" },
  { id: 22, name: "Item 22" },
  { id: 23, name: "Item 23" },
  { id: 24, name: "Item 24" },
  { id: 25, name: "Item 25" },
  { id: 26, name: "Item 26" },
  { id: 27, name: "Item 27" },
  { id: 28, name: "Item 28" },
  { id: 29, name: "Item 29" },
  { id: 30, name: "Item 30" },
  { id: 31, name: "Item 31" },
  { id: 32, name: "Item 32" },
  { id: 33, name: "Item 33" },
  { id: 34, name: "Item 34" },
  { id: 35, name: "Item 35" },
  { id: 36, name: "Item 36" },
  { id: 37, name: "Item 37" },
  { id: 38, name: "Item 38" },
  { id: 39, name: "Item 39" },
  { id: 40, name: "Item 40" },
  { id: 41, name: "Item 41" },
  { id: 42, name: "Item 42" },
  { id: 43, name: "Item 43" },
  { id: 44, name: "Item 44" },
  { id: 45, name: "Item 45" },
  { id: 46, name: "Item 46" },
  { id: 47, name: "Item 47" },
  { id: 48, name: "Item 48" },
  { id: 49, name: "Item 49" },
  { id: 50, name: "Item 50" },
  { id: 51, name: "Item 51" },
  { id: 52, name: "Item 52" },
  { id: 53, name: "Item 53" },
  { id: 54, name: "Item 54" },
  { id: 55, name: "Item 55" },
  { id: 56, name: "Item 56" },
  { id: 57, name: "Item 57" },
  { id: 58, name: "Item 58" },
  { id: 59, name: "Item 59" },
  { id: 60, name: "Item 60" },
  { id: 61, name: "Item 61" },
  { id: 62, name: "Item 62" },
  { id: 63, name: "Item 63" },
  { id: 64, name: "Item 64" },
  { id: 65, name: "Item 65" },
  { id: 66, name: "Item 66" },
  { id: 67, name: "Item 67" },
  { id: 68, name: "Item 68" },
  { id: 69, name: "Item 69" },
  { id: 70, name: "Item 70" },
  { id: 71, name: "Item 71" },
  { id: 72, name: "Item 72" },
  { id: 73, name: "Item 73" },
  { id: 74, name: "Item 74" },
  { id: 75, name: "Item 75" },
  { id: 76, name: "Item 76" },
];

const renderItem = (item) => {
  const itemDiv = document.createElement("div");

  const img = document.createElement("img");
  const w = 100;
  const h = 100;
  img.width = w;
  img.height = h;

  itemDiv.className = `flex flex-col justify-center items-center gap-2 w-[100px]`;

  img.src = `https://placehold.co/${img.height}x${img.width}`;
  img.alt = "icon";
  itemDiv.appendChild(img);
  const h2 = document.createElement("h2");
  h2.className = "text-center";
  h2.textContent = item.name;
  itemDiv.appendChild(h2);
  return itemDiv;
};

const setUpItemsList = () => {
  const itemList = document.querySelector("[data-item-list]");
  if (!itemList) return;

  const searchInput = document.querySelector("[data-search-input]");
  if (!searchInput) return;

  const render = (items) => {
    const x = items.map(renderItem);
    itemList.replaceChildren(...x);
  };

  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();
    const filteredItems = globalItems.filter((item) =>
      item.name.toLowerCase().includes(q)
    );
    render(filteredItems);
  });

  render(globalItems);
};

const setUpForm = () => {
  const form = document.querySelector("[data-item-form]");
  if (!form) return;
  const input = form.querySelector("[data-item-name-field]");
  if (!input) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = input.value;
    if (!name) return;
    const newItem = {
      id: globalItems.length + 1,
      name,
    };
    globalItems.push(newItem);
    input.value = "";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setUpItemsList();
  setUpForm();
});
