import React from 'react';
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import '../stylesheets/reset.scss';
import '../stylesheets/App.scss';


class App extends React.Component {
  render() {
    return (
    <div className="app">
          <Header/>
        <main className="main">
          <BrowserRouter>
          <Switch>
            <Route
              exact
              path={process.env.PUBLIC_URL + '/'}
              render={() => (
                  <Home/>
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + '/about'}
              render={() => (
                <div className="about"></div>
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + '/interiorismo'}
              render={() => (
                <div className="interiorismo"></div>
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + '/eventos'}
              render={() => (
                <div className="eventos"></div>
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + '/contacto'}
              render={() => (
                <div className="contacto"></div>
              )}
            />
          </Switch>
          </BrowserRouter>
        </main>
        <Footer/>
    </div>
    );
  }
}

export default App;
