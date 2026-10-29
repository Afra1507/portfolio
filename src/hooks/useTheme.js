import { useEffect, useState } from "react";

export default function useTheme() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute("content", dark ? "#0b1220" : "#eef2f7");
    }
  }, [dark]);
  return { dark, setDark };
}
