interface Props {
  onSelected: (value: string) => void;
}

function EndpointFilter({ onSelected }: Props) {
  return (
    <select
      onChange={(e) => onSelected(e.target.value)}
      className="p-2 bg-slate-800 text-white focus:outline-2 focus:outline-slate-600 rounded-md w-60"
    >
      <option value="Books">Books</option>
      <option value="Houses">Houses</option>
      <option value="Characters">Characters</option>
    </select>
  );
}

export default EndpointFilter;
