import LogoImg from "@/assets/icons/Sap-Logo.png";
import classes from "@/components/main-header/main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import Navlinks from "./nav-link";
import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={LogoImg} alt="A plate with food on it" priority />
          SAP Flow
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlinks href="/meals">Browse Projects</Navlinks>
            </li>
            <li>
            <Navlinks href="/community">Community</Navlinks>
            </li>
            <li>
            <Navlinks href="/community">About me</Navlinks>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
