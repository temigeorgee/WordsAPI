import "./scss/main.scss";
import "./App.css";
import { lazy, Suspense } from "react";
import LandingLoader from "./component/LandingLoader";
const HomePage = lazy(() => import("./page/HomePage"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<LandingLoader />}>
        <HomePage />
      </Suspense>
    </div>
  );
}

export default App;
