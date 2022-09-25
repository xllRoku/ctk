import { Outlet } from "react-router-dom";
import { LocationProps } from "@/interface/LocationProps";
import Header from "@/components/header/Header";
import ShopCart from "@/components/shopcart/ShopCart";
import Footer from "@/components/footer/Footer";

const Layout = ({ location, setLocation }: LocationProps) => {
  return (
    <>
      <Header location={location} setLocation={setLocation} />
      <main>
        <ShopCart>{<Outlet />}</ShopCart>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
