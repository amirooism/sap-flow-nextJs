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
            <p>Test & share UI5/JS/React projects from all over the world.</p>
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
            SAPFlow is a dynamic and intuitive platform designed specifically
            for SAP students to manage their projects and streamline their tasks
            efficiently. Whether you're working on an individual project or
            collaborating with a team, SAPFlow provides a structured workspace
            to organize ideas, set deadlines, and track progress effortlessly.
            The platform offers an integrated to-do list, allowing users to
            break down complex projects into manageable tasks while ensuring
            deadlines are met. With its clean and user-friendly interface,
            SAPFlow enhances productivity by keeping all project-related
            information in one centralized location, making it easier to stay
            focused and on track.
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
