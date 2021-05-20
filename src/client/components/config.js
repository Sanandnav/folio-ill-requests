/* eslint-disable linebreak-style */
/* eslint-disable prefer-template */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable quotes */

import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cid: "",
      uri: "",
      tenant: "",
      us: "",
      pas: "",
    };
  }

  setId = (event) => {
    this.setState({
      cid: event.target.value,
    });
  };

  setUri = (event) => {
    this.setState({
      uri: event.target.value,
    });
  };

  setTenant = (event) => {
    this.setState({
      tenant: event.target.value,
    });
  };

  setUs = (event) => {
    this.setState({
      us: event.target.value,
    });
  };

  setPas = (event) => {
    this.setState({
      pas: event.target.value,
    });
  };

  submitHandle = (event) => {
    event.preventDefault();
    const i = this.state.cid;
    const u = this.state.uri;
    const t = this.state.tenant;
    const uss = this.state.us;
    const p = this.state.pas;

    fetch("./api/con/" + i + "&" + u + "&" + t + "&" + uss + "&" + p);
  };

  render() {
    return (
      <Container id="conf" className="mt-2">
        <Row>
          <Col>
            <Card border="dark">
              <Card.Header as="h5">
                Upload a configuration information
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <Form onSubmit={this.submitHandle}>
                    <Form.Group>
                      <Form.Label>Customer ID</Form.Label>
                      <Form.Control onChange={this.setId}></Form.Control>
                      <Form.Label>Folio Okapi URL</Form.Label>
                      <Form.Control onChange={this.setUri}></Form.Control>
                      <Form.Label>Folio Tenant</Form.Label>
                      <Form.Control onChange={this.setTenant}></Form.Control>
                      <Form.Label>Folio User</Form.Label>
                      <Form.Control onChange={this.setUs}></Form.Control>
                      <Form.Label>Folio User Password</Form.Label>
                      <Form.Control onChange={this.setPas}></Form.Control>
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="mt-2"
                        type="submit"
                        block
                      >
                        Enviar
                      </Button>
                    </Form.Group>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="dark">
              <Card.Header as="h5">Configuration preview</Card.Header>
              <Card.Body>
                <Card.Text>
                  customer ID:&nbsp;
                  {this.state.cid}
                  <br />
                  OKAPI URL:&nbsp;
                  {this.state.uri}
                  <br />
                  Tenant:&nbsp;
                  {this.state.tenant}
                  <br />
                  User:&nbsp;
                  {this.state.us}
                  <br />
                  Password:&nbsp;
                  {this.state.pas}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Config;
