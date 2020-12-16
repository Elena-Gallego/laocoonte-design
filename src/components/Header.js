import React, { useState } from "react"
import  "../stylesheets/Header.scss"
import MenuButton from "./MenuButton"
import NavigationMenu from "./NavigationMenu"
import LogoTitle from "../images/logo.png";

function Header() {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <header className="header">
        <div className="header-logo"> 
        
         <div className="logo-wrapper">
         {/*<img className="laocoonte-logo" src={LogoTitle} alt=""/>*/}
            <h1 className="h1"><a href="/"><span className="laocoonte">Laocoonte</span><span className="design">Design</span></a></h1>
        </div>
          <NavigationMenu open={open} />
          <MenuButton open={open} handleClick={handleClick} />
        </div>
    </header>
   
  );
}

export default Header