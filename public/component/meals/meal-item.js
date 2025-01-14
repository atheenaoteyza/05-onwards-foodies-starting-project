import Link from "next/link";
import classes from "./meal-item.module.css";
import Image from "next/image";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <>
      <article className={classes.meal}>
        <header>
          <Image src={image} alt={title} fill></Image>
          <div className={classes.headerText}>
            <h2>{title}</h2>
            <p>by {creator}</p>
          </div>
        </header>
        <div className={classes.content}>
          <p className={classes.summary}>{summary}</p>
          <div className={classes.actions}>
            <Link href={`/meals/${slug}`}>View Details</Link>
          </div>
        </div>
      </article>
    </>
  );
}
