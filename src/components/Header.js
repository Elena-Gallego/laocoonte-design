import React from "react"
import  "../stylesheets/Header.scss"
import NavigationMenu from "./NavigationMenu"
//import LogoTitle from "../images/logo.png";

function Header() {

  return (
    <header className="header">
        <div className="title-wrapper">        
            <h1 className="h1">
              <a href="/">
                <span className="laocoonte">Laocoonte</span>
                <span className="design">Design</span>
              </a>
            </h1>        
          <NavigationMenu />
        </div>
    </header>
  );
}

export default Header