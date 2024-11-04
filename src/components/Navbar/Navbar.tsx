import { IoIosSunny, IoIosMoon } from "react-icons/io";
import "./Navbar.css";
import { useThemeStore } from "../../theme/theme";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <div className="navbar">
      <button className="button" onClick={toggleTheme}>
        {isDarkMode ? <IoIosMoon /> : <IoIosSunny />}
      </button>
    </div>
  );
};

export { Navbar };
