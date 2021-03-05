import React from 'react';
import "../stylesheets/Contact.scss";
import { ExternalLink } from 'react-external-link';

class Contact extends React.Component {
    render() {
      return (
        <div className="contact">
            <div className="contact-wrapper">
                <h2 className="contact-title">Contacto</h2>
                <ul className="contact-list">
                    <li className="phone-number"></li>
                    <li className="email">info@laocoontedesign.com</li>
                </ul>
                <ul className="socialmedia">
                    <li className="instagram"> 
                        <ExternalLink href="https://www.instagram.com/laocoonte.design/?hl=es"/>
                        
                    </li>
                </ul>
            </div>
        </div>
      );
    }
}


export default Contact;