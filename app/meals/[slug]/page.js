import Link from "next/link";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getMeaBySlug } from "@/app/lib/meals";
export default function MealDetailsPage({ params }) {
  const meal = getMeaBySlug(params.slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={`https://louiseoteyzabucket.s3.ap-southeast-2.amazonaws.com/${meal.image}`}
            fill
          ></Image>
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: `${meal.instructions}`,
          }}
        ></p>
      </main>
    </>
  );
}
