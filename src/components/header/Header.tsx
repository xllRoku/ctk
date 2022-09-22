import { ModalIsOpenContextType } from "@/context/navigation/ModalIsOpen/types";
import { NavigationContextType } from "@/context/navigation/types";
import { useModal } from "@/hooks/useModal";
import { useScroll } from "@/hooks/useScroll";
import { LocationProps } from "@/interface/LocationProps";
import { useState } from "react";
import NavDesktop from "./desktop/NavDesktop";
import NavMobile from "./mobile/NavMobile";

const Header = ({ location, setLocation }: LocationProps) => {
  const { home } = useScroll() as NavigationContextType;
  const { isModalOpen } = useModal() as ModalIsOpenContextType;
  const [fixed, setFixed] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) setFixed(true);
    else setFixed(false);
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header ref={home}>
      <nav
        className={`${
          fixed && !isModalOpen
            ? "fixed"
            : !fixed && !isModalOpen
            ? ""
            : "below"
        }`}
      >
        <NavMobile />
        <NavDesktop location={location} setLocation={setLocation} />
      </nav>
    </header>
  );
};

export default Header;
