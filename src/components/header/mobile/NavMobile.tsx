import { useState } from "react";
import logo from "../../../assets/images/logo.svg";

const NavMobile = () => {
  const [isShow, setIsShow] = useState(false);

  const showMenu = () => {
    setIsShow(!isShow);
  };

  return (
    <ul className={`${isShow ? "navbar bg-white" : "navbar"}`}>
      <div className="container-logo">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="menu" onClick={showMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="menu-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <div
          className={`${
            isShow ? "container-links" : "container-links notShow"
          }`}
        >
          <li className="links">
            <a href="#" className="link">
              INICIO
            </a>
          </li>
          <li className="links">
            <a href="#" className="link">
              SOLUCIONES
            </a>
          </li>
          <li className="links">
            <a href="#" className="link">
              PLATAFORMAS
            </a>
          </li>
          <li className="links">
            <a href="#" className="link">
              PRODUCTOS
            </a>
          </li>
          <li className="links">
            <a href="#" className="link">
              SOPORTE
            </a>
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
