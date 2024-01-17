import { MODAL_HEADING_TXT } from "../../../configs/constants";
import { loginForm } from "../../../configs/forms/login-form";
import { Row } from "reactstrap";
import "./modal-component.css";
const ModalComponent = (props) => {
  return (
    <>
      <div className="mask"></div>
      <div className="modal-wrap">
        <h2 className="heading">
          {MODAL_HEADING_TXT} <button onClick={props.closeModalHandler}>X</button>
        </h2>
        <div className="login-panel">
          <div className="steps">
            <h1>Steps for login</h1>
            <ol>
              <li>Open Paytm App</li>
              <li>Tap Scan option available at the bottom</li>
              <li>Point Paytm Scan at QR Code to login</li>
            </ol>
          </div>
          <div className="login-form">
            {loginForm.length > 0 &&
              loginForm.map((each) => {
                return (
                  <Row>
                    <label for={each.id}>{each.label}</label>
                    <input type={each.type} name={each.name} id={each.id} />
                  </Row>
                );
              })}
            <button className="loginBtn">LOGIN</button>
          </div>
        </div>
        <div className="footer">
          By signing in, you agree to our privacy policy and terms of use
        </div>
      </div>
    </>
  );
};
export default ModalComponent;
