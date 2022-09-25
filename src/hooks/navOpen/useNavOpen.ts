import { useContext } from "react";
import { NavOpenContext } from "@/context/navOpen/NavOpenContext";

const useNavOpen = () => {
  return useContext(NavOpenContext);
};

export { useNavOpen };
