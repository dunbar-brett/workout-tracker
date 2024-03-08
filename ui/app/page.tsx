import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <h1 className="text-6xl font-bold">Welcome to the Gym</h1>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
