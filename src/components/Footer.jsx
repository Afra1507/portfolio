import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconLink from "./IconLink";
import { links } from "../data/links";

export default function Footer() {
  return (
    <footer className="py-4 border-top mt-5">
      <div className="container d-flex justify-content-between align-items-center">
        <small>© {new Date().getFullYear()} Afra Banu</small>
        <div className="d-flex gap-3">
          <IconLink href={links.github} label="GitHub">
            <GitHubIcon />
          </IconLink>
          <IconLink href={links.linkedin} label="LinkedIn">
            <LinkedInIcon />
          </IconLink>
          <IconLink href={links.instagram} label="Instagram">
            <InstagramIcon />
          </IconLink>
          <IconLink href={links.facebook} label="Facebook">
            <FacebookIcon />
          </IconLink>
        </div>
      </div>
    </footer>
  );
}
