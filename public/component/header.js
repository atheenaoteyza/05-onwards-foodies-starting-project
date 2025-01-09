import Link from "next/link";
import Logo from "@/public/images/logo.png";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <img src={Logo.src}></img>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Homepage</Link>{" "}
          </li>
          <li>
            <Link href="/meals/">Browse a Meal</Link>
          </li>
          <li>
            <Link href="/meals/share">Share a Meal</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
