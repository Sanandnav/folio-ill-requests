/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/order */
/* eslint-disable quotes */
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Conteiner from "react-bootstrap/Container";
import "./app.css";
import UsrForm from "./components/userform";
import Biblo from "./components/biblo";
import Config from "./components/config";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormattedDate } from "react-intl";
import Wrapper from "./components/wrapper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Router>
            <ul id="footer">
              <li>
                <Link to="/">form</Link>
              </li>
              <li>
                <Link to="/conf">config</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/conf">
                <Conf />
              </Route>
            </Switch>
          </Router>
        </Wrapper>
      </div>
    );
  }
}

function Conf() {
  return (
    <div>
      <Config />
    </div>
  );
}

function Home() {
  return (
    <div>
      <Conteiner>
        <Row>
          <Col sm={5}>
            <UsrForm />
          </Col>
          <Col sm={7}>
            <Biblo />
          </Col>
        </Row>
      </Conteiner>

      <FormattedDate
        value={Date.now()}
        year="numeric"
        month="long"
        day="numeric"
        weekday="long"
      />
    </div>
  );
}
