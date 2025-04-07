function Skeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6 bg-[#0e1629] min-h-screen">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="bg-[#1e2a47] rounded-xl p-4 flex flex-col items-center shadow-lg animate-pulse"
        >
          <div className="h-5 w-40 bg-gray-700 rounded mb-2" />
          <div className="h-5 w-32 bg-gray-700 rounded mb-4" />

          <div className="w-28 h-40 bg-gray-600 rounded mb-4" />

          <div className="h-4 w-24 bg-gray-700 rounded" />
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
