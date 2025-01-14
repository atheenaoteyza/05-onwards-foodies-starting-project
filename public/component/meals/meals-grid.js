import classes from "./meals-grid.module.css";
export default function MealsGrid({ meals }) {
  return (
    <>
      <main>
        <ul className={classes.meals}>
          {meals.map((meal) => (
            <li key={meal.id}></li>
          ))}
        </ul>
      </main>
    </>
  );
}
