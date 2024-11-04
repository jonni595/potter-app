import "./Characters.css";

const Characters = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img className="image" src="https://robohash.org/jake" alt="" />
      </div>
      <div className="card-description">
        <h4>Harry Potter</h4>
        <p>Harry</p>
        <p>Hogwarts House</p>
        <ul>
          <li>Children</li>
        </ul>
      </div>
    </div>
  );
};

export { Characters };
