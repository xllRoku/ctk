import { Link } from "react-router-dom";
import { NavigationContextType } from "@/context/navigation/types";
import { useScroll } from "@/hooks/useScroll";
import logo from "../../../assets/images/logo.svg";
import { scrollToSection } from "../utils/scrollToSection";

const NavDesktop = () => {
  const { home, solution, webs } = useScroll() as NavigationContextType;

  return (
    <ul className="navbar-desktop">
      <div
        className="container-logo-desktop"
        onClick={() => scrollToSection(home)}
      >
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="container-navbar-desktop">
        <div className="links-container-desktop">
          <li className="links-desktop" onClick={() => scrollToSection(home)}>
            <Link to="/">
              <p className="link-desktop spacing hover-brd-bottom">Inicio</p>
            </Link>
          </li>
          <li
            className="links-desktop"
            onClick={() => scrollToSection(solution)}
          >
            <Link to="/">
              <p className="link-desktop spacing hover-brd-bottom">
                Soluciones
              </p>
            </Link>
          </li>
          <li className="links-desktop">
            <Link to="/">
              <p
                className="link-desktop spacing hover-brd-bottom"
                onClick={() => scrollToSection(webs)}
              >
                Plataformas
              </p>
            </Link>
          </li>
          <li className="links-desktop">
            <p className="link-desktop spacing hover-brd-bottom">Productos</p>
          </li>
          <li className="links-desktop">
            <p className="link-desktop spacing hover-brd-bottom">Soporte</p>
          </li>
          <li className="links-desktop">
            <a href="#" className="link-desktop btn-locate-vehicle">
              Ubicar Vehiculo
            </a>
          </li>
        </div>
        <div className="user">
          <div className="container-user">
            <li>
              <Link to="/login">
                <p className="account">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </p>
              </Link>
            </li>
            <li>
              <p className="search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </p>
            </li>
            <li>
              <p className="car">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </p>
            </li>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default NavDesktop;
