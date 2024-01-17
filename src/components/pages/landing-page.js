import React from "react";
import { Row, Col, Container } from "reactstrap";
import { loginForm } from "../../configs/forms/login-form";
import "./../../App.css";
import NormalHeader from "./../normal-header";
import Form from "../forms";
import banner from "./../images/side.avif";
import log from "./../images/logo.avif";
const Landingpage = () => {
  return (
    <>
      <Container>
        {" "}
        <NormalHeader />
      </Container>
      <Container fluid>
        <Row xs="1" md="2">
          <Col>
          <img src={log}/>
            <h1>India's Most-loved Payments App</h1>
            <p>
              Recharge & pay bills, book flights & movie tickets, open a savings
              account, invest in stocks & mutual funds, and do a lot more.
            </p>
          </Col>
          <Row>
            <img src={banner} className="images" />
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Landingpage;
