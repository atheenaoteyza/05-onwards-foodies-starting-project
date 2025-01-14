import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/public/component/meals/meals-grid";
import { getMeals } from "@/public/component/meals/meals";

export default async function Meals() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>

      <main>
        <MealsGrid meals={meals}></MealsGrid>
      </main>
    </>
  );
}
