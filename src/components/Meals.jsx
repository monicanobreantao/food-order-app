import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [isLoading, setIsLoading] = useState();
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      const meals = await response.json();

      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem mealData={meal} key={meal.id}></MealItem>
      ))}
    </ul>
  );
}
