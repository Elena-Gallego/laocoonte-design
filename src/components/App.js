import React from 'react';
import Header from "./Header";
import { BrowserRouter, Route, Switch} from "react-router-dom";
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
          <BrowserRouter basename={process.env.PUBLIC_URL}>
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
          </BrowserRouter>
        </main>
        <Footer/>
    </div>
    );
  }
}

export default App;
