import { Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/vite-react" element={<Home />} />
        <Route path="/vite-react/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
