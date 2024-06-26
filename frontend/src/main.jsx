import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/Register.jsx";
import AboutPage from "./pages/About.jsx";
import LoginPage from "./pages/Login.jsx";
import NavBar from "./components/NavBar.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import VerifyPage from "./pages/VerifyPage.jsx";
import OnlyVerifiedRoutes from "./components/OnlyVerifiedRoute.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<OnlyVerifiedRoutes />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/Profile" element={<ProfilePage />} />
            </Route>
            <Route path="/verify" element={<VerifyPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
