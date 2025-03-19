import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export default function SAPFlowPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Streamline Your Projects with <span className={classes.highlight}>SAPFlow</span>
        </h1>
        <p>Organize, collaborate, and manage your SAP projects effortlessly.</p>
      </header>
      <main className={classes.main}>
        <h2>Key Features</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="Project management dashboard" />
            <p>Create & manage your SAP projects with ease</p>
          </li>
          <li>
            <Image src={communityIcon} alt="Team collaboration in action" />
            <p>Collaborate with peers & track progress together</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="Task automation & productivity tools"
            />
            <p>Stay productive with smart to-do lists & reminders</p>
          </li>
        </ul>
      </main>
    </>
  );
}
