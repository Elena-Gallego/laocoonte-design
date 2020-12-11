import React from 'react';
import NavigationMenu from './NavigationMenu';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import '../stylesheets/reset.scss';
import '../stylesheets/App.scss';
import LogoTitle from "../images/logo.png";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="h1"><img className="laocoonte-logo" src={LogoTitle} alt=""/>Laocoonte Design</h1>
        <NavigationMenu/>
        </header>
        <main className="main">
          <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div className="home">
                  <Home/>
                </div>
              )}
            />
            <Route
              path="/about"
              render={() => (
                <div className="about"></div>
              )}
            />
            <Route
              path="/interiorismo"
              render={() => (
                <div className="interiorismo"></div>
              )}
            />
            <Route
              path="/eventos"
              render={() => (
                <div className="eventos"></div>
              )}
            />
            {/*<Route
            exact
              path="/proyectos"
              render={(routerProps) => {
                <div className="proyectos"></div>
              }}
            />
            <Route
              path="/proyectos/1"
              render={(routerProps) => {
                <div className="eventos"></div>
              }}
            />*/}
            <Route
              path="/showroom"
              render={() => (
                <div className="showroom"></div>
              )}
            />
            <Route
              path="/contacto"
              render={() => (
                <div className="contacto"></div>
              )}
            />
          </Switch>
          </BrowserRouter>
        </main>
        <footer className="footer">Copyright</footer>
      </div>
    );
  }
}

export default App;
