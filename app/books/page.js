import Image from "next/image";

export default function BooksPage() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-6 text-blue-800 dark:text-blue-300 text-center">
        Book Recommendations
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { src: "/images/book1.png", title: "Modern CSS with Tailwind" },
          { src: "/images/book2.png", title: "The Next.js Handbook" },
          { src: "/images/book3.jpg", title: "Mindset" },
        ].map((book, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <Image src={book.src} alt={book.title} width={300} height={400} className="rounded" />
            <h3 className="mt-3 font-semibold text-gray-800 dark:text-gray-200">{book.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
