import Link from "next/link";

export default async function MealsFood({ params }) {
  const { slug } = await params;
  return (
    <main>
      <header>
        <h1>{slug}</h1>
      </header>
      <h2>
        <Link href="/">Homepage</Link>
      </h2>
      <h2>
        <Link href="/meals/share">Share a Meal</Link>
      </h2>
      <h2>
        <Link href="/community">Community</Link>
      </h2>
    </main>
  );
}
