import React from "react";
import Landingpage from "./components/pages/landing-page";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessLandingPage from "./components/pages/business-page";
import { paytm_routes } from "./configs/routes-config";
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  return (
    <GoogleOAuthProvider clientId="159996235483-7tcotpfogm6krso0h8jn3iog10on5n37.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
        {
          paytm_routes.map((item)=>{
            return <Route path={item.path} element={item.component}/>
          })
        }
      </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
