import React from "react";
import logo from "../images/business-website-logo.svg";
import NavLinks from "../common/nav";
import { businessNavLinks } from "../../configs/navlinks";
import Logo from "../common/logo";
const BusinessHeader = () => {
  return (
    <div className="flex">
      <Logo src={logo}/>
      <NavLinks menuItem={businessNavLinks}/>
      <div className="btnSignIn">
        <button>signIn</button>
      </div>
    </div>
  );
};

export default BusinessHeader;
