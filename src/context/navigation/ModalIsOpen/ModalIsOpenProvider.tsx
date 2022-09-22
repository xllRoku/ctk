import Props from "@/layouts/primary_layout/interface/props";
import { useState } from "react";
import { ModalIsOpenContext } from "./ModalIsOpenContext";

const ModalIsOpenProvider = ({ children }: Props) => {
  const [isModalOpen, setModalIsOpen] = useState(false);

  return (
    <ModalIsOpenContext.Provider value={{ isModalOpen, setModalIsOpen }}>
      {children}
    </ModalIsOpenContext.Provider>
  );
};

export default ModalIsOpenProvider;
