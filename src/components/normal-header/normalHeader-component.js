import React from "react";
import logo from "../images/logo.svg";
import { defaultNavLinks } from "../../configs/navlinks";
import NavLinks from "../common/nav";
import Logo from "../common/logo";
import Modal from "../common/modal";

const NormalHeader = (props) => {
  return (
    <div className="flex">
     <Logo src={logo}/>
      <NavLinks menuItem={props.menuItem}/>
      <div className="btnSignIn">
        <button onClick={props.signInClickHandler}>signIn</button>
        {
          props.showModal && <Modal closeModalHandler={props.closeModalHandler}/>
        }
      </div>
    </div>
  );
};

export default NormalHeader;
