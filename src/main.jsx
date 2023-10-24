import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/Router.jsx";
import { AuthProvider } from "./Context/AuthContext";
import { Provider } from "react-redux";
import store from "./App/Store";
import AnimatedCursor from "react-animated-cursor";

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

    <Provider store={store}>
      <AuthProvider>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          showSystemCursor={true}
          innerStyle={{
            backgroundColor: "#213555",
          }}
          outerStyle={{
            border: "3px solid #213555",
          }}
        />
        <RouterProvider router={Router} />
      </AuthProvider>
    </Provider>
  </div>
);
