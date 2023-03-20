import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MovieProvider from "./context/MovieContext";
import SerieProvider from "./context/SerieContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MovieProvider>
    <SerieProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SerieProvider>
  </MovieProvider>
);
