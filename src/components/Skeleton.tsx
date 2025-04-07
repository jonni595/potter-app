function Skeleton() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col w-40 p-4 border rounded-lg shadow-lg animate-pulse"
        >
          <div className="w-full h-48 bg-slate-500 rounded mb-4"></div>
          <div className="h-6 bg-slate-500 rounded mb-2"></div>
          <div className="h-4 bg-slate-500 rounded"></div>
        </div>
      ))}
    </>
  );
}

export default Skeleton;
