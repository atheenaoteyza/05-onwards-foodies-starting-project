import Link from "next/link";
import Logo from "@/public/images/logo.png";
import classes from "./header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function Header() {
  return (
    <>
      <MainHeaderBackground></MainHeaderBackground>
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <img src={Logo.src}></img>NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals/">Browse a Meal</Link>
            </li>

            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
