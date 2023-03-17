import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
//componentes
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
