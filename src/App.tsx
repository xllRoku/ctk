import { ScrollProvider } from "./context/navigation/ScrollProvider";
import Router from "./router/Router";

function App() {
  return (
    <>
      <ScrollProvider>
        <Router />
      </ScrollProvider>
    </>
  );
}

export default App;
