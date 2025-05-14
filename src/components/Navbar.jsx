import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/Blowg.png"
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover mr-2"
          />
          <span className="text-2xl font-bold text-sky-600">Blowg</span>
        </Link>
        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(o => !o)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
        <div
          className={`flex-col md:flex-row md:flex md:items-center gap-4 ${
            open ? 'flex' : 'hidden'
          }`}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'text-sky-600' : 'text-gray-600'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-sky-600' : 'text-gray-600'
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
