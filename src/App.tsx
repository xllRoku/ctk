import { useState } from "react";
import ModalIsOpenProvider from "./context/navigation/ModalIsOpen/ModalIsOpenProvider";
import { ScrollProvider } from "./context/navigation/ScrollProvider";
import Router from "./router/Router";

function App() {
  const [location, setLocation] = useState("");

  return (
    <>
      <ScrollProvider>
        <ModalIsOpenProvider>
          <Router location={location} setLocation={setLocation} />
        </ModalIsOpenProvider>
      </ScrollProvider>
    </>
  );
}

export default App;
