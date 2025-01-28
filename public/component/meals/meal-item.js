import { useState } from "react";
import Image from "next/image";
import classes from "./meal-item.module.css";
import Link from "next/link";

export default function MealItem({ title, slug, image, summary, creator }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

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
              onLoadingComplete={handleImageLoad} // use onLoadingComplete for Next.js Image component
            />
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
        {!isImageLoaded && <p>Loading image...</p>}{" "}
        {/* Show loading message while image is loading */}
      </article>
    </>
  );
}
