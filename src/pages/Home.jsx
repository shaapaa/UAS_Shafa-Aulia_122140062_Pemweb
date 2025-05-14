import { useState, useMemo } from 'react';
import useFetch from '../hooks/useFetch';
import SearchBar from '../components/SearchBar';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';
import SkeletonCard from '../components/SkeletonCard';

const ITEMS_PER_PAGE = 9;
const API_URL = 'http://localhost:6543/posts'; // sesuaikan dengan backend nnti

export default function Home() {
  // Panggil useFetch langsung dengan URL
  const { data: posts, loading, error } = useFetch(API_URL);

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = () => {
    setPage(1);
  };

  const filtered = useMemo(() => {
    if (!posts) return [];
    return posts.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.body.toLowerCase().includes(search.toLowerCase()) ||
      (p.tags || []).some(tag => tag.includes(search.toLowerCase()))
    );
  }, [posts, search]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const displayed = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error loading posts.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-[var(--color-skyLight)]">
      <SearchBar
        className="border-b-2 border-[var(--color-primary)]"
        value={search}
        onChange={setSearch}
        onSearch={handleSearch}
      />
      <PostList posts={displayed} />
      {totalPages > 1 && (
        <Pagination
          current={page}
          total={totalPages}
          onPageChange={setPage}
          className="text-[var(--color-primary)]"
      />
   )}
    </div>
  );
}
