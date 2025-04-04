import type { Books } from "../definitions";

function BookList({ title, releaseDate, cover }: Books) {
  return (
    <div className="flex flex-col w-32 justify-around items-center gap-1 p-2 bg-slate-800 rounded-md shadow-sm shadow-slate-600">
      <h5 className="font-bold text-center text-sm text-wrap">{title}</h5>
      <img
        src={cover}
        alt={`Image of ${title}`}
        className="size-28 object-contain hover:scale-125 duration-300 ease-in-out"
      />
      <p className="text-xs text-slate-400">{releaseDate}</p>
    </div>
  );
}

export default BookList;
