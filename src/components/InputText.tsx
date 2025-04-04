interface InputTextProps {
  query: string;
  onChangeText: (query: string) => void;
}

function InputText({ query, onChangeText }: InputTextProps) {
  return (
    <>
      <label htmlFor="searchInput" className="font-bold text-3xl">
        Search
      </label>
      <input
        id="searchInput"
        type="text"
        maxLength={50}
        value={query}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder="Harry Potter..."
        className="p-2 bg-slate-800 text-white focus:outline-2 focus:outline-slate-600 focus:w-lg rounded-md w-60 transition-all duration-300 ease-in-out"
      />
    </>
  );
}

export default InputText;
