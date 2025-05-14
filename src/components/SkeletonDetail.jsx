export default function SkeletonDetail() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-8 bg-gray-300 rounded w-1/2" />
      <div className="h-4 bg-gray-300 rounded w-full" />
      <div className="h-4 bg-gray-300 rounded w-5/6" />
      <div className="h-24 bg-gray-300 rounded w-full" />
    </div>
  );
}
