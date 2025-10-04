import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

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

  const links = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "timeline", label: "Timeline" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className={`navbar ${hidden ? "navbar--hidden" : "navbar--visible"}`}>
      <div className="navbar-inner glass card-glass d-flex align-items-center">
        <ul className="nav m-0 gap-1">
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
  );
}
