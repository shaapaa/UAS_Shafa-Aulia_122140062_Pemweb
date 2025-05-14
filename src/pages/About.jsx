export default function About() {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-sky-600 mb-4">About ReactBlog</h1>
        <p className="text-gray-700 mb-4">
          ReactBlog adalah aplikasi blog modern yang dibangun dengan React, TailwindCSS, dan best practices terkini.
        </p>
        <p className="text-gray-700">
          Fitur utama:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Fetch data dari API DummyJSON</li>
          <li>Pagination & Search client-side</li>
          <li>Routing dengan React Router v6</li>
          <li>Custom Hooks, Context API jika diperlukan</li>
          <li>Responsive, mobile-friendly dengan hamburger menu</li>
        </ul>
      </div>
    );
  }
  