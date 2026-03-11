import React, { useState } from "react";

const menuData = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: "$15.99",
    img: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=200"
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: "$13.99",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200"
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: "$6.99",
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200"
  },
  {
    id: 4,
    title: "Country Delight",
    category: "lunch",
    price: "$20.99",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200"
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "breakfast",
    price: "$22.99",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=200"
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: "$18.99",
    img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=200"
  }
];

function Menu() {
  const [items, setItems] = useState(menuData);

  const filterItems = (category) => {
    const filtered = menuData.filter((item) => item.category === category);
    setItems(filtered);
  };

  return (
    <div>

      <div>
        <button id="filter-btn-1" onClick={() => filterItems("breakfast")}>
          Breakfast
        </button>

        <button id="filter-btn-2" onClick={() => filterItems("lunch")}>
          Lunch
        </button>

        <button id="filter-btn-3" onClick={() => filterItems("shakes")}>
          Shakes
        </button>
      </div>

      <div>
        {items.map((item) => (
          <div
            key={item.id}
            data-test-id={`menu-item-${item.category}`}
          >
            <img src={item.img} alt={item.title} width="150" />
            <h4>{item.title}</h4>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Menu;