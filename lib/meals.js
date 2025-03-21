import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

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
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop(); //split it on the dot and pop the last element which is the file extension
  //generate uniqe file name not file of user
  const fileName = `${meal.slug}.${extension}`;
  //now write that file to public folder with api provide with nodejs , file system api fs
  //fs.createWriteStream allow us write data to a certain file
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  // now that we have the stream which we can write to the path, we can use write() method now
  //wirte methodwant chunk ! it means we should convert our image to buffer
  const bufferedImage = await meal.image.arrayBuffer(); // array buffer give us promise so we have to async and await things
  stream.write(Buffer.from(bufferedImage), (error) => {
    //this function execute when its done writing
    if (error) {
      throw new Error("Saving image failed");
    }
  });
  // now we should save overall data in database
  // for image in data base we just store the path
  meal.image = `/images/${fileName}`;
  //no its time to save in data base , we do it with db ob ject

  db.prepare(`
  INSERT INTO meals
  (title, summary, instructions, creator, creator_email, image, slug)
  VALUES (
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,     
    @image,
    @slug
  )
  `).run(meal);
}

//storing image should be in local system, not in data base, cuase data base is not build for that
//store image in public folder becuase in there is publically availbe for the app
