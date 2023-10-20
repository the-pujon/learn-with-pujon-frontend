import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/Router.jsx";
import {AuthProvider} from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <ul className="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </div>
);
