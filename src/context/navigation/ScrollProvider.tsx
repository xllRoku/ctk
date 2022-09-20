import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "./ScrollContext";
import Props from "@/interface/props";

export const ScrollProvider = ({ children }: Props) => {
  const [currentLocation, setCurrentLocation] = useState();

  const home = useRef(null);
  const solution = useRef(null);
  const webs = useRef(null);

  return (
    <ScrollContext.Provider
      value={{ home, solution, webs, currentLocation, setCurrentLocation }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
