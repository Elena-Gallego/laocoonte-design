import React from "react";
import "../stylesheets/Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer-wrapper">
          <li className="copyright">Laocoonte Design © 2021</li>
          <li className="rights-footer"> All rights reserved</li>
          <li className="credits">
            <a
              className="elena-linkedIn"
              href="https://www.linkedin.com/in/elena-gallego-front/"
            >
              {" "}
              Web developer: Elena Gallego
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
