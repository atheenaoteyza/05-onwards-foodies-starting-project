import Link from "next/link";
import classes from "./meal-item.module.css";
import Image from "next/image";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <>
      <article className={classes.meal}>
        <header>
          <div className={classes.image}>
            <Image
              src={`https://louiseoteyzabucket.s3.ap-southeast-2.amazonaws.com/${image}`}
              alt={title}
              fill
              className={classes.image}
            ></Image>
          </div>
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
