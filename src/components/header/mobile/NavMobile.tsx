import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NavigationContextType } from "@/context/navigation/types";
import { useScroll } from "@/hooks/navigation/useScroll";
import { scrollToSection } from "../utils/scrollToSection";
import menu from "../../../assets/images/icon-white.png";
// import { ShopCartContextType } from "@/context/shop_cart/types";
// import { useShopCart } from "@/hooks/shop_cart/useShopCart";
import logo from "../../../assets/images/logo.svg";
// import search from "../../../assets/images/search.png";
import { useNavOpen } from "@/hooks/navOpen/useNavOpen";
import { NavOpenContextType } from "@/context/navOpen/types";

const NavMobile = () => {
  const { home, webs, solution } = useScroll() as NavigationContextType;
  const { navOpen, setNavOpen } = useNavOpen() as NavOpenContextType;
  // const { isShopCartOpen, setIsShopCartOpen } =
  //   useShopCart() as ShopCartContextType;

  const showMenu = () => {
    setNavOpen(!navOpen);
  };

  return (
    <ul className={`${navOpen ? "navbar bg-white" : "navbar"}`}>
      <div className="container-logo">
        <Link
          to="/"
          onClick={() => {
            if (navOpen) showMenu();
            setTimeout(() => {
              scrollToSection(home);
            }, 100);
          }}
        >
          <img src={logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="menu">
        <button onClick={showMenu}>
          <img src={menu} alt="icon menu" />
        </button>

        <motion.div
          animate={{
            height: navOpen ? "450px" : "0",
          }}
          className={`${navOpen ? "" : "notShow"} container-links `}
        >
          <li
            className="links"
            onClick={() => {
              showMenu();
              setTimeout(() => {
                scrollToSection(home);
              }, 100);
            }}
          >
            <Link to="/">
              <p className="link">INICIO</p>
            </Link>
          </li>
          <li
            className="links"
            onClick={() => {
              showMenu();
              setTimeout(() => {
                scrollToSection(solution);
              }, 100);
            }}
          >
            <p className="link">SOLUCIONES</p>
          </li>
          <li
            className="links"
            onClick={() => {
              showMenu();
              setTimeout(() => {
                scrollToSection(webs);
              }, 100);
            }}
          >
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
              className="button-primary"
              target="_blank"
            >
              UBICAR VEHICULO
            </a>
          </li>
          {/* <div className="user">
            <div className="container-user">
              <li className="account">
                <Link
                  to="/account/sign-in"
                  onClick={() => {
                    // setLocation("sign-in");
                  }}
                >
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABIklEQVRIie3VMUoDQRTG8W9SZBslKVIoWyt4gXgML5JYeA5RvIMewEuYhBQJFtppqV3ELCn9WzhCWKP7xryA4H4wzc7j/WYGZlaq8xcDZMAxMASKOIZAH8g2hebAlO8zAXJvNKtAl3G/ncfjtabnCY8S4IGlZzDCc0lbxnUWIYRtLxgj+tE0hMq+DWOvIsF9tRRZ4bsE2FRrhS8T4KuE2p8T7/HEeI+bbnDE8wrc/+VawptADxgA8zhu4jffndbxivXlakjqSjqSdCjpQFI7Ts8k3UsaSbqWNA4hvK21KmAXOAOeE34ST8ApsPMbsA1cAIsEsJwFcA60rOg+8LgGWM4DsGeBbx3Rz0zLzqq3umM6mrR86bkKPpH04ojOYs86/yzv5x2Nqq3T2YwAAAAASUVORK5CYII=" />
                  <p>Account</p>
                </Link>
              </li>
              <li className="search">
                <img src={search} alt="" />
                <p>Buscar</p>
              </li>
              <li
                className="car"
                onClick={() => setIsShopCartOpen(!isShopCartOpen)}
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABK0lEQVRIie2WMUoDQRSG/6eprIQIklY8gVaeQINg7SFyhJzGM2hhAkK0SGFhZ6skFoFIihQJSuSzcBaH6G5MZme3iF/3Zh58879lh5HWEuCOb56B8zLEADNgvxC5d4gLJ28WLT5z4m7R4i1gAnwAu7E8G/MLZjaR1HF7x7HEvwI0iMNt4viR2HEVKdNeptjMniQ9RhC3M8WOGKlLESPpJikstQsqkoaStnMSP5jZQVKkJjazmaTrnKSS1PKLrFFL+Y677Repo5YkYEfSQNJmoHQqqWpm02QhM7GZvUq6D5RKUseXLhQ7LnMQtxa3zAHUgHHANTkCqisdFzgCusD7EsI3vh4YhytJ1xfgFHgB+kA9tG8Zcd/7fr3Qvr/8TuUC1F2aHnAS2vdPYXwCfvKh5P72KzUAAAAASUVORK5CYII=" />
                <p>$0</p>
              </li>
            </div>
          </div> */}
        </motion.div>
      </div>
    </ul>
  );
};

export default NavMobile;
