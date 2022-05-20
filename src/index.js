import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Websites from "./pages/Websites";
import Dev from "./pages/Dev";
import Nature from "./pages/Nature";
import Gaming from "./pages/Gaming";
import Braver from "./pages/Braver";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/nature" element={<Nature />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/braver" element={<Braver />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
reportWebVitals();
