import React from "react";
import Header from "./Header";
import About from "./About";
import Interiorism from "./Interiorism";
import Events from "./Events";
import Contact from "./Contact";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import CookieConsent from "react-cookie-consent";
import "../stylesheets/reset.scss";
import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Header />
          <main className="main">
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route path="/about" render={() => <About />} />
              <Route path="/interiorismo" render={() => <Interiorism />} />
              <Route path="/eventos" render={() => <Events />} />
              <Route path="/contacto" render={() => <Contact />} />
            </Switch>
          </main>
          <Footer />
          <CookieConsent
            location="bottom"
            buttonText="I agree!!"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#ffffff", color: "black" }}
            buttonStyle={{
              color: "#4e503b",
              background: " #bcc89a",
              fontSize: "13px",
            }}
            expires={150}
          >
            Este sitio web usa cookies para optimizar la experiencia de usuario.{" "}
            <span style={{ fontSize: "10px" }}>
              Bienvenidx a Laocoonte Design.
            </span>
          </CookieConsent>
          ;
        </div>
      </HashRouter>
    );
  }
}

export default App;
