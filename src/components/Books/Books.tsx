import { getLimit } from "../../functions/getLimit";
import "./Books.css";

type Book = {
  cover: string;
  description: string;
  index: number;
  number: number;
  originalTitle: string;
  pages: number;
  releaseDate: string;
  title: string;
};

const Books: React.FC<Book> = ({ cover, title, releaseDate, description }) => {
  return (
    <div className="book">
      <div className="book-image">
        <img className="image" src={cover} alt={title} />
      </div>
      <div className="book-description">
        <div className="title">
          <h5>{title}</h5>
          <span>{releaseDate}</span>
        </div>
        <p>{getLimit(description)}</p>
      </div>
    </div>
  );
};

export { Books };
