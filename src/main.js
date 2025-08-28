import "./style.css";

const saveItems = (items) => {
  console.log("Saving items:", items);
  localStorage.setItem("items", JSON.stringify(items));
};

const getItems = () => {
  const items = localStorage.getItem("items");
  return items ? JSON.parse(items) : [];
};

const renderItem = (item) => {
  console.log("Rendering item:", item);

  const itemDiv = document.createElement("div");
  const img = document.createElement("img");
  const w = 200;
  const h = 200;
  img.width = w;
  img.height = h;

  itemDiv.className = `flex flex-col justify-center relative items-center gap-2 w-[100px] border-5 border-slate-400 rounded-lg bg-slate-400`;
  img.className = "rounded-lg border-2 border-slate-600";
  img.src = item.image;
  img.alt = "icon";
  img.title = item.description;
  itemDiv.appendChild(img);
  const h2 = document.createElement("h2");
  h2.className = "text-center text-white";
  h2.textContent = item.name;
  itemDiv.appendChild(h2);

  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.className = "absolute top-0 right-0 m-1 bg-rose-400 text-white rounded-full w-6 h-6 flex items-center justify-center hover:cursor-pointer";

  closeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const items = getItems().filter((i) => i.id !== item.id);
    saveItems(items);
    itemDiv.remove();
  });

  itemDiv.appendChild(closeButton);


  itemDiv.addEventListener("click", () => {
    // navigate to item detail page
    window.location.href = `/item.html?id=${item.id}`;
  });

  return itemDiv;
};

const setUpItemsList = () => {
  const itemList = document.querySelector("[data-item-list]");
  if (!itemList) return;

  const searchInput = document.querySelector("[data-search-input]");
  if (!searchInput) return;

  const render = (is) => {
    const x = is.map(renderItem);
    itemList.replaceChildren(...x);
  };

  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();

    const filteredItems = getItems().filter((item) =>
      item.name.toLowerCase().includes(q)
    );
    render(filteredItems);
  });

  render(getItems());
};

const setUpForm = () => {
  const form = document.querySelector("[data-item-form]");
  if (!form) return;
  const input = form.querySelector("[data-item-name-field]");
  if (!input) return;
  const descriptionInput = form.querySelector("[data-item-description-field]");
  if (!descriptionInput) return;
  const imageInput = form.querySelector("[data-item-image-field]");
  if (!imageInput) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = input.value;
    const image = imageInput.value;
    const description = descriptionInput.value;

    if (!name) return;

    const items = getItems();

    const newItem = {
      id: items.length + 1,
      name,
      image,
      description,
    };

    items.push(newItem);
    saveItems(items);

    input.value = "";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setUpItemsList();
  setUpForm();
});
