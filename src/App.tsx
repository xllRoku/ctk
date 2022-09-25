import { useState } from "react";
import { ScrollProvider } from "./context/navigation/ScrollProvider";
import NavContextOpenProvider from "./context/navOpen/NavContextOpenProvider";
import SelectedServiceProvider from "./context/selected_service/SelectedServiceProvider";
import ShopCartProvider from "./context/shop_cart/ShopCartProvider";
import Router from "./router/Router";

function App() {
  const [location, setLocation] = useState("");

  return (
    <>
      <ScrollProvider>
        <SelectedServiceProvider>
          <ShopCartProvider>
            <NavContextOpenProvider>
              <Router location={location} setLocation={setLocation} />
            </NavContextOpenProvider>
          </ShopCartProvider>
        </SelectedServiceProvider>
      </ScrollProvider>
    </>
  );
}

export default App;
