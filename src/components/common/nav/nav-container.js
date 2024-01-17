import React, { useEffect, useState } from "react";
import NavComponent from "./nav-component";
//import hello from "../../../../public/response/navlinks.json";
const NavContainer = (props) => {
  
  
  return (
    <div>
      <NavComponent {...props} />
    </div>
  );
};

export default NavContainer;
