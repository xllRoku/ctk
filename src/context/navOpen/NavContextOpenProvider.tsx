import Props from "@/interface/props";
import { useState } from "react";
import { NavOpenContext } from "./NavOpenContext";

const NavContextOpenProvider = ({ children }: Props) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavOpenContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </NavOpenContext.Provider>
  );
};

export default NavContextOpenProvider;
