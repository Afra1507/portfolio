import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import useTheme from "../hooks/useTheme";
import "../styles/ThemeToggle.css";

export default function ThemeToggle() {
  const { dark, setDark } = useTheme();
  return (
    <button
      className={`theme-toggle ${dark ? "dark" : "light"}`}
      onClick={() => setDark((v) => !v)}
      aria-label="Toggle theme"
      title={dark ? "Switch to Light" : "Switch to Dark"}
    >
      <span className="toggle-thumb">
        {dark ? (
          <LightModeIcon fontSize="small" />
        ) : (
          <DarkModeIcon fontSize="small" />
        )}
      </span>
    </button>
  );
}
