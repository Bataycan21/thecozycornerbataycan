export default function ContactPage() {
  return (
    <section className="max-w-md mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-blue-800 dark:text-blue-300 text-center">
        Contact Us
      </h2>

      <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        />
        <textarea
          placeholder="Message"
          className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
