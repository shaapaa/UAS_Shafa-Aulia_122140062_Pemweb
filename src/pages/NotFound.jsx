// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[var(--color-skyLight)]">
      <h1 className="text-6xl font-bold text-[var(--color-primary)]">404</h1>
      <p className="text-xl mt-4 text-[var(--color-muted)]">Page not found</p>
      <Link
        to="/"
        className="mt-6 text-[var(--color-accent)] hover:text-[var(--color-darkBlue)] underline"
      >
        Go back home
      </Link>
    </div>
  );
}
