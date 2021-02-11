import React from 'react';
import Header from "./Header";
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
                <div className="about"></div>
              )}
            />
            <Route
              path= '/interiorismo'
              render={() => (
                <div className="interiorismo"></div>
              )}
            />
            <Route
              path='/eventos'
              render={() => (
                <div className="eventos"></div>
              )}
            />
            <Route
              path='/contacto'
              render={() => (
                <div className="contacto"></div>
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
