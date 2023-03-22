import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
//componentes
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Detail from "./pages/Detail";
import DetailSerie from "./pages/DetailSerie";
import MobileNav from "./components/MobileNav";

function App() {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Router>
        <Header open={open} handleMenuClick={handleMenuClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<TvSeries />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/detail-serie/:id" element={<DetailSerie />} />
        </Routes>
        <MobileNav
          open={open}
          setOpen={setOpen}
          handleItemClick={handleItemClick}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
