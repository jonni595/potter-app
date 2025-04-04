import type { Houses } from "../definitions";

const tailwindColors: Record<string, string> = {
  red: "bg-red-900",
  blue: "bg-blue-900",
  green: "bg-green-900",
  yellow: "bg-yellow-400",
  gold: "bg-amber-400",
  black: "bg-slate-900",
  silver: "bg-slate-400",
};

function HousesList({ house, founder, colors, emoji, animal }: Houses) {
  return (
    <div className="flex flex-col w-44 justify-around items-center gap-1 p-2 bg-slate-800 text-white">
      <h5 className="font-bold text-center text-lg text-wrap">{house}</h5>
      <span className="text-2xl">{emoji}</span>
      <p className="text-xs text-slate-400">{founder}</p>
      <div className="flex gap-1">
        {colors.map((color) => (
          <div
            key={color}
            className={`h-4 w-4 rounded-full ${tailwindColors[color] || ""}`}
          ></div>
        ))}
      </div>
      <p className="text-xs text-slate-400">{animal}</p>
    </div>
  );
}

export default HousesList;
