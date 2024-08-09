import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./sass/sass_global.scss";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/index";
import Venues from "./pages/venues";
import Events from "./pages/events";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/venue" element={<Venues />} />
            <Route path="/events" element={<Events />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
