import Home from "./pages/Home";
import ThreeJsScene from "./pages/ThreeJsCanvas";
import { Suspense } from "react";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Home />
        <ThreeJsScene />
      </Suspense>
    </>
  );
}

export default App;
