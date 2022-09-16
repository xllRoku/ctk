import { useState } from "react";
import { ScrollProvider } from "./context/navigation/ScrollProvider";
import Router from "./router/Router";

function App() {
  const [location, setLocation] = useState("");

  return (
    <>
      <ScrollProvider>
        <Router location={location} setLocation={setLocation} />
      </ScrollProvider>
    </>
  );
}

export default App;
