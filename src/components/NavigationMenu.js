import React from 'react';

import '../stylesheets/NavigationMenu.scss';

class NavigationMenu extends React.Component {
  render() {
    return (
     <nav className="navigation-menu">
       <ul className="menu-sections">
    <li className="home"></li>
    <li className="about"><a href="/about">About</a></li>
    <li className="interiorism"><a href="/interiorismo">Interiorismo</a></li>
    <li className="events"><a href="/eventos">Eventos</a></li>
    <li className="showroom"><a href="/showroom">Showroom</a></li>
    <li className="contact"><a href="/contacto">Contacto</a></li>
  </ul>

     </nav>
    );
  }
}

export default NavigationMenu;
