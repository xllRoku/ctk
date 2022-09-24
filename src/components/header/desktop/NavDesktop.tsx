import { Link } from "react-router-dom";
import { NavigationContextType } from "@/context/navigation/types";
import { useScroll } from "@/hooks/useScroll";
import logo from "../../../assets/images/logo.svg";
import search from "../../../assets/images/search.png";
import cart from "../../../assets/images/cart-w.png";
import { LocationProps } from "@/interface/LocationProps";
import { scrollToSection } from "../utils/scrollToSection";
import { motion } from "framer-motion";
import { useState } from "react";

const NavDesktop = ({ setLocation }: LocationProps) => {
  const { home, webs, solution } = useScroll() as NavigationContextType;

  const [isHoveringAccount, setIsHoveringAccount] = useState(false);
  const [isHoveringSearch, setIsHoveringSearch] = useState(false);
  const [isHoveringCart, setIsHoveringCart] = useState(false);

  const handleMouseOverAccount = () => {
    setIsHoveringAccount(true);
  };

  const handleMouseOutAccount = () => {
    setIsHoveringAccount(false);
  };

  const handleMouseOverSearch = () => {
    setIsHoveringSearch(true);
  };

  const handleMouseOutSearch = () => {
    setIsHoveringSearch(false);
  };

  const handleMouseOverCart = () => {
    setIsHoveringCart(true);
  };

  const handleMouseOutCart = () => {
    setIsHoveringCart(false);
  };

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
            {/* <Link> */}
            <p className="link-desktop spacing hover-brd-bottom">Soluciones</p>
            {/* </Link> */}
          </li>
          <li className="links-desktop">
            <p
              className="link-desktop spacing hover-brd-bottom"
              onClick={() => scrollToSection(webs)}
            >
              Plataformas
            </p>
          </li>
          <li className="links-desktop">
            <p className="link-desktop spacing hover-brd-bottom">Productos</p>
          </li>
          <li className="links-desktop">
            <p className="link-desktop spacing hover-brd-bottom">Soporte</p>
          </li>
          <li className="links-desktop">
            <a
              href="https://gps.controltaken.com/modern/login"
              className="link-desktop btn-locate-vehicle"
            >
              Ubicar Vehiculo
            </a>
          </li>
        </div>
        <div className="user">
          <div className="container-user">
            <motion.li
              animate={{
                width: isHoveringAccount ? "5.5rem" : "2rem",
                height: "3rem",
                overflow: isHoveringAccount ? "inital" : "hidden",
              }}
              onMouseOver={handleMouseOverAccount}
              onMouseOut={handleMouseOutAccount}
              className="account"
            >
              <Link
                to="/account/sign-in"
                onClick={() => {
                  setLocation("sign-in");
                }}
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABIklEQVRIie3VMUoDQRTG8W9SZBslKVIoWyt4gXgML5JYeA5RvIMewEuYhBQJFtppqV3ELCn9WzhCWKP7xryA4H4wzc7j/WYGZlaq8xcDZMAxMASKOIZAH8g2hebAlO8zAXJvNKtAl3G/ncfjtabnCY8S4IGlZzDCc0lbxnUWIYRtLxgj+tE0hMq+DWOvIsF9tRRZ4bsE2FRrhS8T4KuE2p8T7/HEeI+bbnDE8wrc/+VawptADxgA8zhu4jffndbxivXlakjqSjqSdCjpQFI7Ts8k3UsaSbqWNA4hvK21KmAXOAOeE34ST8ApsPMbsA1cAIsEsJwFcA60rOg+8LgGWM4DsGeBbx3Rz0zLzqq3umM6mrR86bkKPpH04ojOYs86/yzv5x2Nqq3T2YwAAAAASUVORK5CYII=" />
                <p>Account</p>
              </Link>
            </motion.li>
            <motion.li
              animate={{
                width: isHoveringSearch ? "5.5rem" : "2rem",
                height: "3rem",
                overflow: isHoveringSearch ? "inital" : "hidden",
              }}
              onMouseOver={handleMouseOverSearch}
              onMouseOut={handleMouseOutSearch}
              className="search"
            >
              <img src={search} alt="" />
              <p>Buscar</p>
            </motion.li>
            <motion.li
              animate={{
                width: isHoveringCart ? "5.5rem" : "2rem",
                height: "3rem",
                overflow: isHoveringCart ? "inital" : "hidden",
              }}
              onMouseOver={handleMouseOverCart}
              onMouseOut={handleMouseOutCart}
              className="car"
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABK0lEQVRIie2WMUoDQRSG/6eprIQIklY8gVaeQINg7SFyhJzGM2hhAkK0SGFhZ6skFoFIihQJSuSzcBaH6G5MZme3iF/3Zh58879lh5HWEuCOb56B8zLEADNgvxC5d4gLJ28WLT5z4m7R4i1gAnwAu7E8G/MLZjaR1HF7x7HEvwI0iMNt4viR2HEVKdNeptjMniQ9RhC3M8WOGKlLESPpJikstQsqkoaStnMSP5jZQVKkJjazmaTrnKSS1PKLrFFL+Y677Repo5YkYEfSQNJmoHQqqWpm02QhM7GZvUq6D5RKUseXLhQ7LnMQtxa3zAHUgHHANTkCqisdFzgCusD7EsI3vh4YhytJ1xfgFHgB+kA9tG8Zcd/7fr3Qvr/8TuUC1F2aHnAS2vdPYXwCfvKh5P72KzUAAAAASUVORK5CYII=" />
              <p>$0</p>
            </motion.li>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default NavDesktop;
