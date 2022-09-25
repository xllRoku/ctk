import { Link } from "react-router-dom";
import { LinkInterface } from "./interface/LinkInterface";

const CustomLink = ({
  name,
  path,
  scrollToSection,
  section,
}: LinkInterface) => {
  return (
    <li className="links-desktop" onClick={() => scrollToSection(section)}>
      <Link to={path} className="link-desktop spacing hover-brd-bottom">
        {name}
      </Link>
    </li>
  );
};

export default CustomLink;
