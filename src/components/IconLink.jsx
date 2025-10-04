export default function IconLink({ href, label, children }) {
  return (
    <a
      className="d-inline-flex align-items-center gap-2 link-underline-opacity-0"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
    >
      <span
        className="text-secondary"
        style={{ transition: "color .15s ease" }}
      >
        {children}
      </span>
    </a>
  );
}
