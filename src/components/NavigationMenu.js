import React from 'react';
import {Link} from "react-router-dom";
import '../stylesheets/NavigationMenu.scss';



function NavigationMenu({ open }) {
    return (
    <nav className="navigation-menu">
      <ul className="menu-sections">
        <li className="about"><Link to="/about">About</Link> </li>
        <li className="interiorism"><Link to="/interiorismo">Interiorismo</Link></li>
        <li className="events"><Link to="/eventos">Eventos</Link></li>
        <li className="contact"><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}


export default NavigationMenu;
