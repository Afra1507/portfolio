export default function IconLink({ href, label, children }) {
  return (
    <a
      className="icon-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  );
}
