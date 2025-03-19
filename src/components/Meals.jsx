import React, { useEffect } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
    sendRequest,
  } = useHttp("http://localhost:3000/meals", {}, []);

  useEffect(() => {
    sendRequest();
  }, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem mealData={meal} key={meal.id}></MealItem>
      ))}
    </ul>
  );
}
