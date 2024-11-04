import { IoIosSunny, IoIosMoon } from "react-icons/io";
import "./Navbar.css";
import logo from "../../assets/harry-potter-logo.png";
import { useScrollY } from "../../hooks/useScrollY";
import { useThemeStore } from "../../theme/theme";

const Navbar = () => {
  const { isVisible } = useScrollY();
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <nav
      className="navbar"
      style={{ transform: isVisible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="navbar-left">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <a href="#home">Characters</a>
          </li>
          <li>
            <a href="#houses">Houses</a>
          </li>
          <li>
            <a href="#spells">Spells</a>
          </li>
          <li>
            <a href="#books">Books</a>
          </li>
        </ul>
      </div>
      <button className="button" onClick={toggleTheme}>
        {isDarkMode ? <IoIosMoon /> : <IoIosSunny />}
      </button>
    </nav>
  );
};

export { Navbar };
