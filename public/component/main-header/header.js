import Link from "next/link";
import Logo from "@/public/images/logo.png";
import classes from "./header.module.css";
import MainHeaderBackground from "./main-header-background";
import HeaderNav from "./header-nav";

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
              <HeaderNav href="/meals"> Browse Meals</HeaderNav>
            </li>

            <li>
              <HeaderNav href="/community"> Join community</HeaderNav>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
