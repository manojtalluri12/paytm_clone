import React from "react";
import { Link } from "react-router-dom";
const NavComponent = ({ menuItem }) => {
  return (
    <nav className="nav">
      {
        menuItem.length ===0 && <h1>Loading...</h1>
      }
      <ul className="flex nav-links">
        {menuItem.length > 0 &&
          menuItem.map((each) => {
            const template = () => {
              if (each === "Paytm For Business") {
                return <Link to="/business">{each}</Link>;
              } else {
                return each;
              }
            };
            return <li>{template()}</li>;
          })}
      </ul>
    </nav>
  );
};

export default NavComponent;
