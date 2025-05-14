export default function SkeletonCard() {
    return (
      <div className="animate-pulse bg-white p-4 rounded-lg shadow">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
        <div className="h-4 bg-gray-300 rounded w-full mb-2" />
        <div className="h-4 bg-gray-300 rounded w-full mb-2" />
        <div className="h-4 bg-gray-300 rounded w-5/6" />
      </div>
    );
  }
  