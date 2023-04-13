import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  Installation,
  Contact,
  Local
} from "./components";
import Repairs from "./components/Repairs";
import Capabilies from "./components/Capabilities";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/installation" element={<Installation />} />
      <Route path="/repairs" element={<Repairs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/local" element={<Local />} />
      <Route path="/capabilities" element={<Capabilies />} />
    </Routes>
    {/* <Footer /> */}
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();