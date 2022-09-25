import Props from "@/interface/props";
import { useState } from "react";
import { SelectedServiceContext } from "./SelectedServiceContext";

const SelectedServiceProvider = ({ children }: Props) => {
  const [selectedService, setSelectedService] = useState({
    image: undefined,
    title: "",
  });
  return (
    <SelectedServiceContext.Provider
      value={{ selectedService, setSelectedService }}
    >
      {children}
    </SelectedServiceContext.Provider>
  );
};

export default SelectedServiceProvider;
