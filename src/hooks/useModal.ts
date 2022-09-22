import { ModalIsOpenContext } from "@/context/navigation/ModalIsOpen/ModalIsOpenContext";
import { useContext } from "react";

const useModal = () => {
  return useContext(ModalIsOpenContext);
};

export { useModal };
