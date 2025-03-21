const sql = require('better-sqlite3');
const db = sql('meals.db');

// const dummyMeals = [
//   {
//     title: 'Juicy Cheese Burger',
//     slug: 'juicy-cheese-burger',
//     image: '/images/burger.jpg',
//     summary:
//       'A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.',
//     instructions: `
//       1. Prepare the patty:
//          Mix 200g of ground beef with salt and pepper. Form into a patty.

//       2. Cook the patty:
//          Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.

//       3. Assemble the burger:
//          Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.

//       4. Serve:
//          Complete the assembly with the top bun and serve hot.
//     `,
//     creator: 'John Doe',
//     creator_email: 'johndoe@example.com',
//   },
//   {
//     title: 'Spicy Curry',
//     slug: 'spicy-curry',
//     image: '/images/curry.jpg',
//     summary:
//       'A rich and spicy curry, infused with exotic spices and creamy coconut milk.',
//     instructions: `
//       1. Chop vegetables:
//          Cut your choice of vegetables into bite-sized pieces.

//       2. Sauté vegetables:
//          In a pan with oil, sauté the vegetables until they start to soften.

//       3. Add curry paste:
//          Stir in 2 tablespoons of curry paste and cook for another minute.

//       4. Simmer with coconut milk:
//          Pour in 500ml of coconut milk and bring to a simmer. Let it cook for about 15 minutes.

//       5. Serve:
//          Enjoy this creamy curry with rice or bread.
//     `,
//     creator: 'Max Schwarz',
//     creator_email: 'max@example.com',
//   },
//   {
//     title: 'Homemade Dumplings',
//     slug: 'homemade-dumplings',
//     image: '/images/dumplings.jpg',
//     summary:
//       'Tender dumplings filled with savory meat and vegetables, steamed to perfection.',
//     instructions: `
//       1. Prepare the filling:
//          Mix minced meat, shredded vegetables, and spices.

//       2. Fill the dumplings:
//          Place a spoonful of filling in the center of each dumpling wrapper. Wet the edges and fold to seal.

//       3. Steam the dumplings:
//          Arrange dumplings in a steamer. Steam for about 10 minutes.

//       4. Serve:
//          Enjoy these dumplings hot, with a dipping sauce of your choice.
//     `,
//     creator: 'Emily Chen',
//     creator_email: 'emilychen@example.com',
//   },
//   {
//     title: 'Classic Mac n Cheese',
//     slug: 'classic-mac-n-cheese',
//     image: '/images/macncheese.jpg',
//     summary:
//       "Creamy and cheesy macaroni, a comforting classic that's always a crowd-pleaser.",
//     instructions: `
//       1. Cook the macaroni:
//          Boil macaroni according to package instructions until al dente.

//       2. Prepare cheese sauce:
//          In a saucepan, melt butter, add flour, and gradually whisk in milk until thickened. Stir in grated cheese until melted.

//       3. Combine:
//          Mix the cheese sauce with the drained macaroni.

//       4. Bake:
//          Transfer to a baking dish, top with breadcrumbs, and bake until golden.

//       5. Serve:
//          Serve hot, garnished with parsley if desired.
//     `,
//     creator: 'Laura Smith',
//     creator_email: 'laurasmith@example.com',
//   },
//   {
//     title: 'Authentic Pizza',
//     slug: 'authentic-pizza',
//     image: '/images/pizza.jpg',
//     summary:
//       'Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and melted cheese.',
//     instructions: `
//       1. Prepare the dough:
//          Knead pizza dough and let it rise until doubled in size.

//       2. Shape and add toppings:
//          Roll out the dough, spread tomato sauce, and add your favorite toppings and cheese.

//       3. Bake the pizza:
//          Bake in a preheated oven at 220°C for about 15-20 minutes.

//       4. Serve:
//          Slice hot and enjoy with a sprinkle of basil leaves.
//     `,
//     creator: 'Mario Rossi',
//     creator_email: 'mariorossi@example.com',
//   },
//   {
//     title: 'Wiener Schnitzel',
//     slug: 'wiener-schnitzel',
//     image: '/images/schnitzel.jpg',
//     summary:
//       'Crispy, golden-brown breaded veal cutlet, a classic Austrian dish.',
//     instructions: `
//       1. Prepare the veal:
//          Pound veal cutlets to an even thickness.

//       2. Bread the veal:
//          Coat each cutlet in flour, dip in beaten eggs, and then in breadcrumbs.

//       3. Fry the schnitzel:
//       Heat oil in a pan and fry each schnitzel until golden brown on both sides.

//       4. Serve:
//       Serve hot with a slice of lemon and a side of potato salad or greens.
//  `,
//     creator: 'Franz Huber',
//     creator_email: 'franzhuber@example.com',
//   },
//   {
//     title: 'Fresh Tomato Salad',
//     slug: 'fresh-tomato-salad',
//     image: '/images/tomato-salad.jpg',
//     summary:
//       'A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.',
//     instructions: `
//       1. Prepare the tomatoes:
//         Slice fresh tomatoes and arrange them on a plate.
    
//       2. Add herbs and seasoning:
//          Sprinkle chopped basil, salt, and pepper over the tomatoes.
    
//       3. Dress the salad:
//          Drizzle with olive oil and balsamic vinegar.
    
//       4. Serve:
//          Enjoy this simple, flavorful salad as a side dish or light meal.
//     `,
//     creator: 'Sophia Green',
//     creator_email: 'sophiagreen@example.com',
//   },
// ];

const dummyMeals = [
   {
     title: 'SAPUI5',
     slug: 'sap-ui5',
     image: '/images/sap-ui5.png',
     summary:
       'JavaScript framework for building responsive, enterprise-ready web applications integrated with SAP services.',
     instructions: `
       1. MVC Architecture:
          Clearly structured using Model-View-Controller to separate concerns and simplify maintenance.
 
       2. Data Binding:
          Offers robust two-way binding for dynamically connecting views with data models.
 
       3. UI Controls:
          Rich library of predefined UI components enabling rapid development.
 
       4. Integration:
          Seamlessly integrates with SAP systems via OData services.
     `,
     creator: 'SAP SE',
     creator_email: 'info@sap.com',
   },
   {
     title: 'SAP Fiori',
     slug: 'sap-fiori',
     image: '/images/Sap-fiori.png',
     summary:
       'Design system providing a consistent and intuitive user experience for SAP enterprise applications.',
     instructions: `
       1. Design Principles:
          Role-based, responsive, simple, coherent, and delightful user experiences.
 
       2. Fiori Launchpad:
          Centralized entry point offering personalized access to applications.
 
       3. Mobile-first:
          Fully responsive design optimized for multiple devices and screen sizes.
 
       4. Consistency:
          Unified UX patterns ensuring user-friendly navigation across SAP applications.
     `,
     creator: 'SAP SE',
     creator_email: 'info@sap.com',
   },
   {
     title: 'React',
     slug: 'react',
     image: '/images/react-icon.webp',
     summary:
       'A JavaScript library for building fast, scalable, and maintainable user interfaces with component-based architecture.',
     instructions: `
       1. Component-based:
          Reusable and modular UI components facilitate scalable development.
 
       2. Virtual DOM:
          Efficiently updates UI components, significantly improving app performance.
 
       3. Hooks:
          Enables the use of state and lifecycle methods within functional components.
 
       4. JSX:
          Combines HTML and JavaScript elegantly, improving code readability.
     `,
     creator: 'Meta',
     creator_email: 'opensource@meta.com',
   },
   {
     title: 'Next.js',
     slug: 'next-js',
     image: '/images/nextjs-icon.jpeg',
     summary:
       'React framework enabling server-side rendering, static site generation, and enhanced SEO optimization.',
     instructions: `
       1. Server-side Rendering (SSR):
          Generates pages dynamically on the server, enhancing SEO and initial load speed.
 
       2. Static Site Generation (SSG):
          Pre-renders pages at build time for faster load performance.
 
       3. Automatic Routing:
          Simplifies routing without additional configuration.
 
       4. Built-in APIs:
          Offers optimized data fetching methods and image optimization by default.
     `,
     creator: 'Vercel',
     creator_email: 'support@vercel.com',
   },
   {
     title: 'Docker',
     slug: 'docker',
     image: '/images/Docker-Logo.png',
     summary:
       'Containerization platform that simplifies application deployment and ensures consistency across different environments.',
     instructions: `
       1. Containerization:
          Packages apps and dependencies into lightweight, portable containers.
 
       2. Dockerfile:
          Defines application environments clearly and reproducibly.
 
       3. Docker Compose:
          Easily orchestrates multi-container applications.
 
       4. Portability:
          Ensures applications run consistently across development, testing, and production.
     `,
     creator: 'Docker Inc.',
     creator_email: 'support@docker.com',
   },
   {
     title: 'Vanilla JavaScript',
     slug: 'vanilla-javascript',
     image: '/images/vanilla-js2.png',
     summary:
       'Pure JavaScript without additional frameworks or libraries, offering maximum flexibility and performance.',
     instructions: `
       1. DOM Manipulation:
          Directly access and manipulate HTML elements dynamically.
 
       2. Event Handling:
          Manages user interactions seamlessly through built-in event listeners.
 
       3. Fetch API:
          Facilitates asynchronous data fetching from APIs.
 
       4. Performance:
          Executes efficiently without overhead from external libraries.
     `,
     creator: 'Brendan Eich',
     creator_email: 'brendan.eich@example.com',
   },
 ];
 
 

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
