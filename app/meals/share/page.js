"use client";
import { shareMeal } from "@/app/lib/action";
import classes from "./page.module.css";
import ImagePicker from "@/public/component/meals/image-picker";
import MealsFormSubmit from "@/public/component/meals/meals-form-submit";
import { useFormState } from "react-dom";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>

      <section className={classes.main}>
        <form className={classes.form} action={formAction}>
          <fieldset className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </fieldset>

          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>

          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>

          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>

          <div className={classes.imagePicker}>
            <ImagePicker label="Your image" name="image" />
          </div>

          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>

          {state.message && <p className={classes.error}>{state.message}</p>}
        </form>
      </section>
    </>
  );
}
