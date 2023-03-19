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

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<TvSeries />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
