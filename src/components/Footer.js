import React from 'react';
import '../stylesheets/Footer.scss';

class Footer extends React.Component {
    render() {
      return (
        <footer className="footer">
            <div className="footer-wrapper">
                <span className="copyright">Laocoonte Design © 2021. All rights reserved.</span>
                <span className="credits">Web developer: Elena Gallego </span>
            </div>
      </footer>

      );
    }
}


export default Footer;