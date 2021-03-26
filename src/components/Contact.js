import React from "react";
import "../stylesheets/Contact.scss";
import MessagePhoto from "../images/message.png";
import InstaLogo from "../images/instagram-logo.png";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-wrapper">
          <h2 className="contact-title">Contacto</h2>
          <ul className="contact-list">
            <li className="phone-number"></li>
            <li className="email">
              <a
                className="email-link"
                href="mailto: proyectos@laocoontedesign.com"
              >
                <img
                  className="email-logo"
                  src={MessagePhoto}
                  alt="Logo Instagram"
                />{" "}
              </a>
            </li>
          </ul>
          <ul className="socialmedia">
            <li className="instagram">
              <a
                className="instagram-link"
                href="https://www.instagram.com/laocoonte.design/?hl=es"
              >
                <img
                  className="insta-logo"
                  src={InstaLogo}
                  alt="Logo Instagram"
                />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;
