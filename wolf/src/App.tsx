import "./App.scss";
import { Impresion } from "./components/3d";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Gym } from "./components/gym";
import { Home } from "./components/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/3d" element={<Impresion />} />
            <Route path="/gym" element={<Gym />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
