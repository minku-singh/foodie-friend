import { useState } from "react";
import "./styles.css";

export default function App() {
  const foodDB = {
    indian: [
      { name: "Pani Puri", rating: "5.0/5" },
      { name: "Samosa", rating: "4.8/5" },
      { name: "Chole kulche", rating: "5.0/5" }
    ],
    italian: [
      { name: "Pizza", rating: "4.9/5" },
      { name: "Lasagne", rating: "4.0/5" },
      { name: "Gelato", rating: "4.8/5" }
    ],
    chinese: [
      { name: "Dim Sums", rating: "4.8/5" },
      { name: "Hot Pot", rating: "3.2/5" },
      { name: "Ma Po Tofu", rating: "4.5/5" }
    ]
  };

  let arrFoodDB = Object.keys(foodDB);

  const [showCuisine, setShowCuisine] = useState("indian");
  function handleBtnClick(item) {
    setShowCuisine(item);
  }

  return (
    <div className="App">
      <h1>🍕Foodie Friend</h1>
      <p>Food recommendation</p>

      {arrFoodDB.map((item) => {
        return (
          <button key={item} onClick={() => handleBtnClick(item)}>
            {item.toUpperCase()}
          </button>
        );
      })}
      <hr />

      <div className="foodlist">
        {foodDB[showCuisine].map((food) => {
          return (
            <div className="renderedDiv">
              <p>{food.name}</p>
              <p>{food.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
