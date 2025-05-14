export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-600 py-6 mt-12">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <img
            src="/Blowg.png"
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover mb-2"
          />
          <h2 className="text-xl font-bold text-sky-600 mb-1">Blowg</h2>
          <p className="text-sm mb-2">
            Aplikasi blog yang menyediakan berita terbaru dan informasi seputar dunia digital.
          </p>
          <p className="text-xs">
            © {new Date().getFullYear()} Blowg. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  