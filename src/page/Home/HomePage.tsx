import { Card, Navbar } from "../../components";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="home" id="home">
      <Navbar />
      <div className="grid">
        <div className="grid__title">
          <h1>characters</h1>
        </div>
        <div className="grid__characters">
          <div className="container-card">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
