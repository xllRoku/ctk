import { ScrollProvider } from "./context/navigation/ScrollProvider";
import { Home } from "./pages";

function App() {
  return (
    <>
      <ScrollProvider>
        <Home />
      </ScrollProvider>
    </>
  );
}

export default App;
