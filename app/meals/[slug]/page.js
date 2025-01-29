import Link from "next/link";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getMeaBySlug } from "@/app/lib/meals";

export default async function MealDetailsPage({ params }) {
  const meal = await getMeaBySlug(params.slug); // ✅ Use `await` inside an async function

  if (!meal) {
    notFound();
  }

  // Replace newlines with <br/> for HTML rendering
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={
              meal.image
                ? `https://louiseoteyzabucket.s3.ap-southeast-2.amazonaws.com/${meal.image}`
                : "/default-image.jpg"
            }
            alt={meal.title} // ✅ Add `alt` to avoid warnings
            fill
          />
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
            __html: meal.instructions, // ✅ No need for template literals inside dangerouslySetInnerHTML
          }}
        ></p>
      </main>
    </>
  );
}
