import React from "react";
import "./Houses.css";

type Houses = {
  animal: string;
  colors: string[];
  emoji: string;
  founder: string;
  house: string;
  index: number;
};
const Houses: React.FC<Houses> = ({
  emoji,
  founder,
  house,
  animal,
  colors,
}) => {
  return (
    <div className="house">
      <div className="house-emoji">
        <span>{emoji}</span>
      </div>
      <div className="house-description">
        <h4>{house}</h4>
        <p>{founder}</p>
        <p>{animal}</p>
        <ul>
          <li>
            <div
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: `${colors[0]}`,
                borderRadius: "50%",
              }}
            ></div>
          </li>
          <li>
            <div
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: `${colors[1]}`,
                borderRadius: "50%",
              }}
            ></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Houses };
