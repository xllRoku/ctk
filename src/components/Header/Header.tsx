import { NavigationContextType } from "@/context/navigation/types";
import { useScroll } from "@/hooks/useScroll";
import { useState } from "react";
import NavDesktop from "./Desktop/NavDesktop";
import NavMobile from "./Mobile/NavMobile";

const Header = () => {
  const { home } = useScroll() as NavigationContextType;
  const [fixed, setFixed] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) setFixed(true);
    else setFixed(false);
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header ref={home}>
      <nav className={`${fixed ? "fixed" : ""}`}>
        <NavMobile />
        <NavDesktop />
      </nav>
    </header>
  );
};

export default Header;
