import type { Books } from "../definitions";
import { getLimit } from "../utils";

function BookList({ title, releaseDate, cover, description }: Books) {
  return (
    <div className="w-60 h-36 p-2 bg-slate-800 text-white flex justify-center items-center gap-1">
      <h5 className="font-bold text-center text-lg">{title}</h5>
      <img src={cover} alt={`Image of ${title}`} className="w-20 h-20" />
      <p>{releaseDate}</p>
      <p>{getLimit(description)}</p>
    </div>
  );
}

export default BookList;
