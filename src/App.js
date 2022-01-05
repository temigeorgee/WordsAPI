import "./scss/main.scss";
import "./App.css";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("./page/HomePage"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <HomePage />
      </Suspense>
    </div>
  );
}

export default App;
