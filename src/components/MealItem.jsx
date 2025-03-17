import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function MealItem({ mealData }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(mealData);
  }

  return (
    <li className="meal-item">
      <article>
        <img
          src={`http://localhost:3000/${mealData.image}`}
          alt={mealData.name}
        />
        <div>
          <h3>{mealData.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(mealData.price)}
          </p>
          <p className="meal-item-description">{mealData.description}</p>
          <p>
            <Button onClick={handleAddMealToCart}>Add to cart</Button>
          </p>
        </div>
      </article>
    </li>
  );
}
