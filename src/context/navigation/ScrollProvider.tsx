import { useRef } from "react";
import { ScrollContext } from "./ScrollContext";
import Props from "@/interface/props";

export const ScrollProvider = ({ children }: Props) => {
  const home = useRef(null);
  const solution = useRef(null);
  const webs = useRef(null);

  return (
    <ScrollContext.Provider value={{ home, solution, webs }}>
      {children}
    </ScrollContext.Provider>
  );
};
