import { Outlet } from "react-router-dom";
import { Header } from "@/components";

const Layout = () => {
  return (
    <>
      <Header />
      <main>{<Outlet />}</main>
    </>
  );
};

export default Layout;
