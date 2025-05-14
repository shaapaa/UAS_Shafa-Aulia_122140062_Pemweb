import PropTypes from 'prop-types';

export default function Pagination({ current, total, onPageChange }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="flex justify-center space-x-2 mt-6">
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded ${page === current ? 'bg-sky-600 text-white' : 'bg-white border'}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};
