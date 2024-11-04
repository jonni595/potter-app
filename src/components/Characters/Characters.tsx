import "./Characters.css";

type Character = {
  birthdate: string;
  children: string[];
  fullName: string;
  hogwartsHouse: string;
  image: string;
  index: number;
  interpretedBy: string;
  nickname: string;
};

const Characters: React.FC<Character> = ({
  fullName,
  nickname,
  hogwartsHouse,
  image,
  interpretedBy,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img className="image" src={image} alt={fullName} />
      </div>
      <div className="card-description">
        <h4>{fullName}</h4>
        <p>{nickname}</p>
        <p>{hogwartsHouse}</p>
        <i>{interpretedBy}</i>
      </div>
    </div>
  );
};

export { Characters };
