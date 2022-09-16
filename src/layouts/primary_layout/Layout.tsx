import { Outlet } from "react-router-dom";

import { LocationProps } from "@/interface/LocationProps";
import Header from "@/components/header/Header";

const Layout = ({ location, setLocation }: LocationProps) => {
  return (
    <>
      <Header location={location} setLocation={setLocation} />
      <main>{<Outlet />}</main>
    </>
  );
};

export default Layout;
