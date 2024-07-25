import { Routes, Route, Navigate } from "react-router-dom";
import Portfolio from "./Portfolio";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vite-react" element={<Navigate to="/" />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
