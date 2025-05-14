import { useMemo } from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function RecentPosts() {
  // Ambil semua posts dari backend
  const { data: posts = [], loading, error } = useFetch('http://localhost:6543/posts');

  // Hitung 5 post terbaru berdasarkan id tertinggi
  const recent = useMemo(() => {
    return posts.length
      ? [...posts].sort((a, b) => b.id - a.id).slice(0, 5)
      : [];
  }, [posts]);

  return (
    <aside className="space-y-3">
      <h2 className="text-xl font-semibold text-gray-700">Recent Posts</h2>

      {loading && <p>Loading…</p>}
      {error && <p className="text-red-500">Error loading posts.</p>}

      {!loading && !error && (
        <ul className="space-y-2">
          {recent.map((p) => (
            <li key={p.id}>
              <Link to={`/posts/${p.id}`} className="text-sky-600 hover:underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

