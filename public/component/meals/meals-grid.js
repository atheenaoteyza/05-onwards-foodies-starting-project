import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";
export default function MealsGrid({ meals }) {
  return (
    <>
      <main>
        <ul className={classes.meals}>
          {meals.map((meal) => (
            <li key={meal.id}>
              <MealItem {...meal}></MealItem>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
