import { Characters, Navbar, Houses, Books } from "../../components";
import { usePotter } from "../../hooks/usePotter";
import "./Home.css";

const HomePage = () => {
  const { characters, houses, books, loading, error } = usePotter();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home" id="home">
      <Navbar />
      <div className="characters">
        {characters.map((character) => (
          <Characters key={character.index} {...character} />
        ))}
      </div>
      <div className="houses">
        {houses.map((house) => (
          <Houses key={house.index} {...house} />
        ))}
      </div>
      <div className="books">
        {books.map((book) => (
          <Books key={book.index} {...book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
