import "./styles/index.less";
import "./styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./pages/root";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
