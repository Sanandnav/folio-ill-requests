/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/order */
/* eslint-disable quotes */
import React, { useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// import languages
import esCO from "../languages/es-CO.json";
import enUS from "../languages/en-US.json";
import ptBR from "../languages/pt-BR.json";

export default function Wrapper(props) {
  const [locale, setlocale] = useState("es");
  const [lang, setlang] = useState(esCO);

  const changeLang = (getLang) => {
    setlocale(getLang);
    switch (getLang) {
      case "en":
        setlang(enUS);
        break;
      case "es":
        setlang(esCO);
        break;
      case "pt":
        setlang(ptBR);
        break;
      default:
        setlang(enUS);
    }
  };

  return (
    <IntlProvider locale={locale} messages={lang}>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Folio ILL form</Navbar.Brand>
          <NavDropdown
            title={
              <FormattedMessage
                id="lang.selct"
                defaultMessage="Selección de idiomas"
              />
            }
            id="collasible-nav-dropdown"
            className="dropdown"
          >
            <NavDropdown.Item onClick={() => changeLang("en")}>
              <FormattedMessage id="lang.eng" defaultMessage="English" />
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLang("es")}>
              <FormattedMessage id="lang.esp" defaultMessage="Spanish" />
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLang("pt")}>
              <FormattedMessage id="lang.por" defaultMessage="Portuguese" />
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>
        <div>{props.children}</div>
      </div>
    </IntlProvider>
  );
}
