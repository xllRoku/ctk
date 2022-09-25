import { useState } from "react";
import logo from "../../../assets/images/logo.svg";
import menu from "../../../assets/images/icon-white.png";
import { Link } from "react-router-dom";
import { NavigationContextType } from "@/context/navigation/types";
import { useScroll } from "@/hooks/navigation/useScroll";
import { scrollToSection } from "../utils/scrollToSection";

const NavMobile = () => {
  const { home, webs, solution, currentLocation } =
    useScroll() as NavigationContextType;
  const [isShow, setIsShow] = useState(false);

  const showMenu = () => {
    setIsShow(!isShow);
  };

  return (
    <ul className={`${isShow ? "navbar bg-white" : "navbar"}`}>
      <div className="container-logo">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="menu" onClick={showMenu}>
        <img src={menu} alt="" />
        <div
          className={`${
            isShow ? "container-links" : "container-links notShow"
          }`}
        >
          <li className="links" onClick={() => scrollToSection(home)}>
            <Link to="/">
              <p className="link">INICIO</p>
            </Link>
          </li>
          <li className="links" onClick={() => scrollToSection(solution)}>
            <p className="link">SOLUCIONES</p>
          </li>
          <li className="links" onClick={() => scrollToSection(webs)}>
            <p>PLATAFORMAS</p>
          </li>
          <li className="links">
            <Link to="/">
              <p className="link">PRODUCTOS</p>
            </Link>
          </li>
          <li className="links">
            <Link to="/">
              <p className="link">SOPORTE</p>
            </Link>
          </li>
          <li className="links">
            <a
              href="https://gps.controltaken.com/"
              className="btn-locate-vehicle"
              target="_blank"
            >
              UBICAR VEHICULO
            </a>
          </li>
        </div>
      </div>
    </ul>
  );
};

export default NavMobile;
