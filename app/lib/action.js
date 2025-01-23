"use server";

import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

export async function shareMeal(prevState, formData) {
  function isInvalid(text) {
    return !text || text.trim() === "";
  }

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalid(meal.title) ||
    isInvalid(meal.summary) ||
    isInvalid(meal.instructions) ||
    isInvalid(meal.creator) ||
    isInvalid(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Input is invalid. All input fields are required",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals");
  await new Promise((resolve) => setTimeout(resolve, 100)); // Wait briefly before redirecting
  redirect("/meals");
}
