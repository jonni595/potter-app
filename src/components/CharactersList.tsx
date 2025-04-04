import type { Characters } from "../definitions";

function CharactersList({
  fullName,
  nickname,
  hogwartsHouse,
  interpretedBy,
  image,
  birthdate,
}: Characters) {
  return (
    <div className="flex flex-col w-32 justify-around items-center gap-1 p-2 bg-slate-800 text-white">
      <h5 className="font-bold text-center text-sm text-wrap">{fullName}</h5>
      <img
        src={image}
        alt={`Image of ${fullName}`}
        className="size-28 object-contain hover:scale-125 duration-300 ease-in-out"
      />
      <p className="text-xs text-slate-400">{nickname}</p>
      <p className="text-xs text-slate-400">{hogwartsHouse}</p>
      <p className="text-xs text-slate-400">{interpretedBy}</p>
      <p className="text-xs text-slate-400 italic">{birthdate}</p>
    </div>
  );
}

export default CharactersList;
