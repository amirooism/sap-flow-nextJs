import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
//   throw new Error("Loading Projects faild");
  return db.prepare("SELECT * FROM MEALS").all();
}

//.all() → Used to fetch multiple rows from the database.
// .run() → Used for inserting, updating, or deleting data; it does not return any results.
