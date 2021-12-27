import React from "react";
import ReactDOM from "react-dom";
import GalleryProvider from "./ContextApi/Gallery";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <GalleryProvider>
    <App />
  </GalleryProvider>,
  document.getElementById("root")
);
