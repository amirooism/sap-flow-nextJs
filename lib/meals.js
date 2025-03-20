import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw new Error("Loading Projects faild");
  return db.prepare("SELECT * FROM MEALS").all();
}
//I use aysync here to get me aa promise so i can add deylay on the promis, (So I do it foer adding delay)
//.all() → Used to fetch multiple rows from the database.
// .run() → Used for inserting, updating, or deleting data; it does not return any results.

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE SLUG = ?").get(slug);
}
