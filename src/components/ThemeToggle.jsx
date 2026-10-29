import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import useTheme from "../hooks/useTheme";
import "../styles/ThemeToggle.css";

export default function ThemeToggle() {
  const { dark, setDark } = useTheme();
  return (
    <button
      type="button"
      className="icon-btn theme-toggle"
      onClick={() => setDark((v) => !v)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
    </button>
  );
}
