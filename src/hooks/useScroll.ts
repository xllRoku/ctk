import { ScrollContext } from "@/context/navigation/ScrollContext";
import { useContext } from "react";

export const useScroll = () => {
  return useContext(ScrollContext);
};
