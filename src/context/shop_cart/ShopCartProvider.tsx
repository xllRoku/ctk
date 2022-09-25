import Props from "@/interface/props";
import { useState } from "react";
import { ShopCartContext } from "./ShopCartContext";

const ShopCartProvider = ({ children }: Props) => {
  const [isShopCartOpen, setIsShopCartOpen] = useState(false);

  return (
    <ShopCartContext.Provider value={{ isShopCartOpen, setIsShopCartOpen }}>
      {children}
    </ShopCartContext.Provider>
  );
};

export default ShopCartProvider;
