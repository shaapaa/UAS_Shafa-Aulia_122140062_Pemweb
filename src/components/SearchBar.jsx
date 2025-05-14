import PropTypes from 'prop-types';

export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSearch();
      }}
      className="flex w-full mb-4"
    >
      <input
        type="text"
        placeholder="Search posts..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
      <button
        type="submit"
        className="bg-sky-600 text-white px-4 rounded-r-md hover:bg-sky-700 transition"
      >
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};
