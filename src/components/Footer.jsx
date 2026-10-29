import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__meta">
          <strong>Afra Banu</strong>
          <small>Colombo, Sri Lanka</small>
        </div>
        <SocialLinks />
        <small>© {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}
