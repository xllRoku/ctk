import { useContext } from "react";
import { ShopCartContext } from "@/context/shop_cart/ShopCartContext";

const useShopCart = () => {
  return useContext(ShopCartContext);
};

export { useShopCart };
