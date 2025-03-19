import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals(); //we can get our data without useEffect or any fetch request in clinet components
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Real world Projects, cretated{" "}
          <span className={classes.highlight}>By You</span>
        </h1>
        <p>Choose your favorite project and work with it.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your New Project</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching Projects ...</p>}>
          <Meals/>
        </Suspense>
      </main>
    </>
  );
}

// We can add aysic function to a component function because its a server components
