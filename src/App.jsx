import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./error";
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";
import Login from "./login-comp/login";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route
          path="/"
          element={
            <div className="bg">
              <Navbar />
              <Main />
            </div>
          }
        />
        <Route
          path="login"
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
