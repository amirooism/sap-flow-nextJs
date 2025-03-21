// "use client"

// import { useEffect, useState } from 'react';
// import Image from 'next/image';

// import burgerImg from '@/assets/burger.jpg';
// import curryImg from '@/assets/curry.jpg';
// import dumplingsImg from '@/assets/dumplings.jpg';
// import macncheeseImg from '@/assets/macncheese.jpg';
// import pizzaImg from '@/assets/pizza.jpg';
// import schnitzelImg from '@/assets/schnitzel.jpg';
// import tomatoSaladImg from '@/assets/tomato-salad.jpg';
// import classes from './image-slideshow.module.css';

// const images = [
//   { image: burgerImg, alt: 'A delicious, juicy burger' },
//   { image: curryImg, alt: 'A delicious, spicy curry' },
//   { image: dumplingsImg, alt: 'Steamed dumplings' },
//   { image: macncheeseImg, alt: 'Mac and cheese' },
//   { image: pizzaImg, alt: 'A delicious pizza' },
//   { image: schnitzelImg, alt: 'A delicious schnitzel' },
//   { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
// ];

// export default function ImageSlideshow() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex < images.length - 1 ? prevIndex + 1 : 0
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={classes.slideshow}>
//       {images.map((image, index) => (
//         <Image
//           key={index}
//           src={image.image}
//           className={index === currentImageIndex ? classes.active : ''}
//           alt={image.alt}
//         />
//       ))}
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

import sapui5Img from '@/assets/sap-ui5.png';
import sapFioriImg from '@/assets/Sap-fiori.png';
import reactImg from '@/assets/react-icon.webp';
import nextjsImg from '@/assets/nextjs-icon.jpeg';
import dockerImg from '@/assets/Docker-Logo.png';
import vanillaJsImg from '@/assets/vanilla-js2.png';
import classes from './image-slideshow.module.css';

const images = [
  { image: sapui5Img, alt: 'SAPUI5 framework' },
  { image: sapFioriImg, alt: 'SAP Fiori design system' },
  { image: reactImg, alt: 'React JavaScript library' },
  { image: nextjsImg, alt: 'Next.js React framework' },
  { image: dockerImg, alt: 'Docker containerization platform' },
  { image: vanillaJsImg, alt: 'Vanilla JavaScript' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
