import { Outlet } from "react-router-dom";
import { LocationProps } from "@/interface/LocationProps";
import Header from "@/components/header/Header";
import ShopCart from "@/components/shopcart/ShopCart";

const Layout = ({ location, setLocation }: LocationProps) => {
  return (
    <>
      <Header location={location} setLocation={setLocation} />
      <main>
        <ShopCart>{<Outlet />}</ShopCart>
      </main>
    </>
  );
};

export default Layout;
