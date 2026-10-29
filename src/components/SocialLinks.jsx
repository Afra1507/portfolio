import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconLink from "./IconLink";
import { links } from "../data/links";

const items = [
  { href: links.github, label: "GitHub", Icon: GitHubIcon },
  { href: links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: links.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: links.facebook, label: "Facebook", Icon: FacebookIcon },
];

export default function SocialLinks() {
  return (
    <div className="icon-row">
      {items.map((item) => (
        <IconLink key={item.label} href={item.href} label={item.label}>
          <item.Icon fontSize="small" />
        </IconLink>
      ))}
    </div>
  );
}
