import React from 'react';
import Header from "./Header";
import About from "./About";
import Interiorism from "./Interiorism";
import Events from "./Events";
import Contact from "./Contact";
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import '../stylesheets/reset.scss';
import '../stylesheets/App.scss';


class App extends React.Component {
  render() {
    return (
      <HashRouter>
    <div className="app">
          <Header/>
        <main className="main">
           <Switch>
            <Route
              exact
              path= '/'
              render={() => (
                  <Home/>
              )}
            />
            <Route
              path='/about'
              render={() => (
                <About/>
              )}
            />
            <Route
              path= '/interiorismo'
              render={() => (
                <Interiorism/>
              )}
            />
            <Route
              path='/eventos'
              render={() => (
                <Events/>
              )}
            />
            <Route
              path='/contacto'
              render={() => (
                <Contact/>
              )}
            />
          </Switch>
        </main>
        <Footer/>
    </div>
    </HashRouter>
    );
  }
}

export default App;
