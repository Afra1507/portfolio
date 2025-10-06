import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  // hide-on-scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      setHidden(goingDown && y > 100);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const links = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "timeline", label: "Timeline" },
    { id: "contact", label: "Contact" },
  ];

  const closeAndScroll = () => setOpen(false);

  return (
    <>
      {/* Backdrop for mobile drawer */}
      <div
        className={`nav-backdrop ${open ? "active" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`navbar ${hidden ? "navbar--hidden" : "navbar--visible"}`}
      >
        <div className="navbar-inner glass card-glass d-flex align-items-center justify-content-between">
          {/* Home */}
          <a href="#" className="nav-brand">
            <HomeIcon fontSize="large" />
          </a>

          {/* Hamburger (mobile only) */}
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Navigation Links */}
          <ul
            id="primary-navigation"
            className={`nav nav-list ${open ? "is-open" : ""}`}
            onClick={closeAndScroll}
          >
            {links.map((l) => (
              <li className="nav-item" key={l.id}>
                <a className="nav-link" href={`#${l.id}`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
