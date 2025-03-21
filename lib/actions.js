// "use server";
// import { saveMeal} from './meals'


// async function shareMeal(formData) {
//   const meal = {
//     title: formData.get("title"),
//     summary: formData.get("summary"),
//     instructions: formData.get("instructions"),
//     image: formData.get("image"),
//     creator: formData.get("name"),
//     creator_email: formData.get("email"),
//   };
//   await saveMeal(meal)
// }



"use server";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // Basic validation
  if (!meal.title || !meal.image || !meal.creator_email) {
    return { success: false, message: "Required fields are missing." };
  }

  try {
    await saveMeal(meal);
    return { success: true };
  } catch (err) {
    console.error("Error saving meal:", err);
    return { success: false, message: err.message };
  }
}
