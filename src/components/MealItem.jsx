import { currencyFormatter } from "../util/formatting";

export default function MealItem({ mealData }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${mealData.image}`} alt={mealData.name} />
        <div>
          <h3>{mealData.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(mealData.price)}</p>
          <p className="meal-item-description">{mealData.description}</p>
          <p>
            <button className="meal-item-actions">Add to cart</button>
          </p>
        </div>
      </article>
    </li>
  );
}
