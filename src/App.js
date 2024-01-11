import React from "react";
import Landingpage from "./components/pages/landing-page";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessLandingPage from "./components/pages/business-page";
import { paytm_routes } from "./configs/routes-config";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          paytm_routes.map((item)=>{
            return <Route path={item.path} element={item.component}/>
          })
        }
      </Routes>
    </BrowserRouter>
  );
};

export default App;
