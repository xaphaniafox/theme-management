import { useThemeContext } from "../context";
const Header = () => {
  const theme = useThemeContext();
  const darkMode = theme.darkMode;

  const changeTheme = () => {
    theme.setDarkMode(!darkMode);
  };
  return (
    <header
      className={`navbar navbar-expand ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-secondary"
      } shadow-sm`}
    >
      <div className="container">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <a className="nav-link">صفحه اصلی</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link">محصولات</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link">درباره ما</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link">تماس با ما</a>
          </li>
        </ul>
        <button
          type="button"
          className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
          onClick={changeTheme}
        >
          {darkMode ? "روشن" : "تاریک"}
        </button>
      </div>
    </header>
  );
};

export default Header;
