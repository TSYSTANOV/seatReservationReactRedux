import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChooseTour } from "./components/ChooseTour";
import { EnterPersonalData } from "./components/EnterPersonalData";
import { SeatPlane } from "./components/SeatPlane";
function App() {
  return (
    <BrowserRouter>
      <div className="container app"></div>
      <Routes>
        <Route path="/" element={<ChooseTour />} />
        <Route path="enter-personal-data" element={<EnterPersonalData />} />
        <Route path="seat-plane" element={<SeatPlane />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
