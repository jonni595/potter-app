import "./Books.css";

const Books = () => {
  return (
    <div className="book">
      <div className="book-image">
        <img className="image" src="https://robohash.org/jake" alt="" />
      </div>
      <div className="book-description">
        <div className="title">
          <h5>Harry Potter and the Philosopher's Stone</h5>
          <span>releaseDate</span>
        </div>
        <p>description</p>
      </div>
    </div>
  );
};

export { Books };
