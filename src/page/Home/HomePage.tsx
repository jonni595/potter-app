import { Characters, Navbar, Houses, Books } from "../../components";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="home" id="home">
      <Navbar />
      <div className="characters">
        <Characters />
        <Characters />
        <Characters />
        <Characters />
        <Characters />
        <Characters />
        <Characters />
        <Characters />
        <Characters />
        <Characters />
        <Characters />
        <Characters />
      </div>
      <div className="houses">
        <Houses />
        <Houses />
        <Houses />
        <Houses />
      </div>
      <div className="books">
        <Books />
      </div>
    </div>
  );
};

export default HomePage;
