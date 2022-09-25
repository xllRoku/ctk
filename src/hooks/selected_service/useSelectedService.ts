import { useContext } from "react";
import { SelectedServiceContext } from "@/context/selected_service/SelectedServiceContext";

const useSelectedService = () => {
  return useContext(SelectedServiceContext);
};

export { useSelectedService };
