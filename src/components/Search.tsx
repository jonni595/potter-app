import { useState } from "react";
import { MagicMotion } from "react-magic-motion";
import BookList from "./BookList";
import { usePotter } from "../hooks/usePotter";
import EndpointFilter from "./EndpointFilter";
import HousesList from "./HousesList";

export function Search() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("Books");
  const { books, houses, characters } = usePotter();

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
      <h4 className="font-bold text-xl mt-4">My {selected}</h4>
      <EndpointFilter onSelected={setSelected} />
      <MagicMotion>
        <div className="flex flex-wrap gap-2">
          {selected === "Books" && (
            <>
              {books
                .filter((book) =>
                  book.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((book) => (
                  <BookList
                    key={book.index}
                    title={book.title}
                    releaseDate={book.releaseDate}
                    cover={book.cover}
                  />
                ))}
            </>
          )}
          {selected === "Houses" && (
            <>
              {houses
                .filter((house) =>
                  house.house.toLowerCase().includes(query.toLowerCase())
                )
                .map((house) => (
                  <HousesList key={house.index} {...house} />
                ))}
            </>
          )}
          {selected === "Characters" && (
            <>
              {characters.map((character) => (
                <div key={character.index}>{character.fullName}</div>
              ))}
            </>
          )}
        </div>
      </MagicMotion>
    </div>
  );
}
