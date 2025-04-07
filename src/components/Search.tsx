import { useState } from "react";
import { MagicMotion } from "react-magic-motion";
import BookList from "./BookList";
import { usePotter } from "../hooks/usePotter";
import EndpointFilter from "./EndpointFilter";
import HousesList from "./HousesList";
import CharactersList from "./CharactersList";
import InputText from "./InputText";
import Skeleton from "./Skeleton";

export function Search() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("Books");
  const { books, houses, characters, isLoading } = usePotter();

  return (
    <div
      className="flex flex-col gap-3 p-1"
      style={{
        overflowY: `${selected === "Characters" ? "scroll" : "hidden"}`,
      }}
    >
      <InputText query={query} onChangeText={setQuery} />
      <h4 className="font-bold text-xl mt-4">My {selected}</h4>
      <EndpointFilter onSelected={setSelected} />
      <MagicMotion>
        <div>
          {selected === "Books" && (
            <div className="flex flex-wrap gap-2">
              {isLoading ? (
                <Skeleton />
              ) : (
                books
                  .filter((book) =>
                    book.title.toLowerCase().includes(query.toLowerCase())
                  )
                  .map((book) => <BookList key={book.index} {...book} />)
              )}
            </div>
          )}
          {selected === "Houses" && (
            <div className="flex flex-wrap gap-2">
              {houses
                .filter((house) =>
                  house.house.toLowerCase().includes(query.toLowerCase())
                )
                .map((house) => (
                  <HousesList key={house.index} {...house} />
                ))}
            </div>
          )}
          {selected === "Characters" && (
            <div className="flex flex-wrap gap-2">
              {characters
                .filter((character) =>
                  character.fullName.toLowerCase().includes(query.toLowerCase())
                )
                .map((character) => (
                  <CharactersList key={character.index} {...character} />
                ))}
            </div>
          )}
        </div>
      </MagicMotion>
    </div>
  );
}
