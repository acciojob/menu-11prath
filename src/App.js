import React, { useState } from "react";

const menu = [
  { id: 1, title: "Pancakes", category: "Breakfast" },
  { id: 2, title: "Burger", category: "Lunch" },
  { id: 3, title: "Milkshake", category: "Shakes" },
];

function App() {
  const [items, setItems] = useState(menu);

  const filterItems = (category) => {
    const filtered = menu.filter((item) => item.category === category);
    setItems(filtered);
  };

  return (
    <div id="main">
      <h1>Menu</h1>

      <button id="filter-btn-1" onClick={() => filterItems("Breakfast")}>
        Breakfast
      </button>

      <button id="filter-btn-2" onClick={() => filterItems("Lunch")}>
        Lunch
      </button>

      <button id="filter-btn-3" onClick={() => filterItems("Shakes")}>
        Shakes
      </button>

      <div>
        {items.map((item) => (
          <div
            key={item.id}
            data-test-id={`menu-item-${item.category.toLowerCase()}`}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;