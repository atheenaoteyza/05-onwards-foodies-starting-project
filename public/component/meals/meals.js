import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    // Fetch meals from the database
    const meals = db.prepare("SELECT * FROM meals").all();

    // Debugging
    console.log("Meals fetched:", meals);

    return meals;
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw new Error("Failed to fetch meals.");
  }
}
