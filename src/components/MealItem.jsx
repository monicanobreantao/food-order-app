import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function MealItem({ mealData }) {
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
            <Button className="meal-item-actions">Add to cart</Button>
          </p>
        </div>
      </article>
    </li>
  );
}
