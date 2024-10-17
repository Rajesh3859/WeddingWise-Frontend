import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const ThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme?.theme || "light"); // Fallback to 'light' if theme is undefined

  return (
    <div
      className={`${theme} bg-white text-black dark:text-white dark:bg-black min-h-screen`}
    >
      {children}
    </div>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
