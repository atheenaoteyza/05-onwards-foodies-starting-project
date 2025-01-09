import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1>
        <Link href="/">Homepage</Link>
      </h1>
      <h1>
        <Link href="/meals/share">Share a Meal</Link>
      </h1>
      <h1>
        <Link href="/community">Community</Link>
      </h1>
    </main>
  );
}
