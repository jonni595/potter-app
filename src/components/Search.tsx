import { useState } from "react";
import { MagicMotion } from "react-magic-motion";

export function Search() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="searchInput" className="font-bold text-3xl">
        Search
      </label>
      <input
        id="searchInput"
        type="text"
        maxLength={50}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Harry Potter..."
        className="p-2 bg-slate-800 text-white focus:outline-2 focus:outline-slate-600 rounded-md w-60"
      />
      <h4 className="font-bold text-xl mt-4">My Books</h4>
      <MagicMotion>
        <div className="flex flex-col flex-wrap gap-2"></div>
      </MagicMotion>
    </div>
  );
}
