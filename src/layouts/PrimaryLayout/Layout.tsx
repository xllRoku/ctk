import React from "react";
import { Header } from "@/components";
import Props from "./interface/props";

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
