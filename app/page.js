import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 dark:bg-gray-900 transition-colors duration-300">
      <main className="flex w-full max-w-3xl flex-col items-center gap-10 py-24 px-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition">
        <Image
          src="/images/book1.png"
          alt="The Cozy Corner"
          width={120}
          height={160}
          priority
          className="rounded shadow"
        />

        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-blue-800 dark:text-blue-300">
            Welcome to The Cozy Corner
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            A cozy online bookstore with hand-picked recommendations for every
            reader.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/books"
            className="flex h-12 items-center justify-center rounded-full bg-blue-600 px-6 text-white hover:bg-blue-700 transition"
          >
            Browse Books
          </Link>

          <Link
            href="/about"
            className="flex h-12 items-center justify-center rounded-full border border-blue-600 px-6 text-blue-600 hover:bg-blue-100 dark:border-blue-300 dark:text-blue-300 dark:hover:bg-gray-700 transition"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}
