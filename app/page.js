import Link from "next/link";

import classes from "./page.module.css";
import ImageSlideshow from "@/components/Images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Manage projects and tasks with ease</h1>
            <p>
              Discover, Test, and Collaborate on Innovative UI5, JavaScript,
              and React Projects Worldwide.
            </p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Projects</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            SAP Flow is a streamlined project management platform tailored
            specifically for SAP students. Easily create, manage, and track your
            SAP-related projects within an intuitive interface built with
            Next.js and React. Leverage powerful backend integration for
            efficient data handling, personalize your user profile, and engage
            with interactive quizzes to enrich your learning experience.
          </p>
          <p>
            Beyond simple task management, SAPFlow fosters collaboration and
            knowledge-sharing among SAP students. Users can upload project
            documentation, attach files, and communicate with team members in
            real time. Advanced features such as task prioritization, progress
            tracking, and deadline reminders ensure that projects stay on
            schedule.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why SAPFlow?</h2>
          <p>
            SAPFlow goes beyond traditional project management by offering a
            tailored experience for SAP students, ensuring that their unique
            academic and professional needs are met.
          </p>
        </section>
      </main>
    </>
  );
}
