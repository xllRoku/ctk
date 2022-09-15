import NavDesktop from "./Desktop/NavDesktop";
import NavMobile from "./Mobile/NavMobile";

const Header = () => {
  return (
    <header>
      <nav>
        <NavMobile />
        <NavDesktop />
      </nav>
    </header>
  );
};

export default Header;
