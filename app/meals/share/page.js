import Link from "next/link";

export default function ShareMeal() {
  return (
    <main>
      <h1>
        <Link href="/">Homepage</Link>
      </h1>
      <h1>
        <Link href="/meals">Meals</Link>
      </h1>
      <h1>
        <Link href="/community">Community</Link>
      </h1>
    </main>
  );
}
