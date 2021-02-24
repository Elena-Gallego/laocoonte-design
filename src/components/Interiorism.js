
import React from 'react';
import "../stylesheets/Interiorism.scss";
import bfdefaultphoto from "../images/default-brava.jpg";
import dsdefaultphoto from "../images/default-domestico.jpg";
import aedefaultphoto from "../images/default-aesop.jpg";
import {Link} from "react-router-dom";




class Interiorism extends React.Component {
    constructor(props) {
       super(props)
      this.brava = React.createRef();
      }
      handleScroll = e => {
        e.preventDefault();
        const brava = this.brava.current;
        window.scrollTo({
          top: brava.offsetTop,
          left: 0,
          behavior: "instant"
        });
      };
        render() {
    return (
        <div className="interiorism-wrapper">
            <h2 className="interiorism-title">Interiorismo</h2>
        <article className="interiorism-articles">
            <div className="brava-fabrics">
                <Link onClick={this.handleScroll} to= "#section-brava-fabrics">
                    <img className="bf-default-photo" src={bfdefaultphoto} alt="brava-shop"></img>
                    <h2 className="bf-title">Brava Fabrics</h2>
                </Link>
            </div>
            <div className="domestico-shop">
                <a className="domestico-shop-content" href="#section-domestico-shop">
                    <img className="ds-default-photo"src={dsdefaultphoto} alt="domestico-shop"></img>
                    <h2 className="ds-title">Domestico Shop</h2>
                </a>
            </div>
            <div className="aesop">
                <a className="aesop-content" href="#section-aesop">
                    <img className="ae-default-photo" src={aedefaultphoto} alt="aesop"></img>
                    <h2 className="ae-title">Aesop</h2>
                </a>
            </div>
        </article>
            <section id="section-brava-fabrics"className="section-brava-fabrics" ref={this.brava}>
                <div className="brava-fabrics-section-wrapper">
                    <h2 className="brava-fabrics-section-title">Brava Fabrics Store</h2>
                    <ul className="brava-fabrics-container">
                            <p className="bf-description">El Mediterráneo y lo decó se alían para dar concepto a este espacio donde lo natural y lo sostenible es una constante en todos los procesos creativos y de producción. <span className="bf-date"> Madrid, 2020.</span></p>
                            
                        <li className="bf-item-1"></li>
                        <li className="bf-item-2"></li>
                        <li className="bf-item-3"></li>
                        <li className="bf-item-4"></li>
                        <li className="bf-item-5"></li>
                        <li className="bf-item-6"></li>
                        <li className="bf-item-7"></li>
                        <li className="bf-item-8"></li>
                        <li className="bf-item-9"></li>
                    </ul>
                </div>
            </section>
            <section id="section-domestico-shop"className="section-domestico-shop">
                <div className="domestico-shop-section-wrapper">
                    <h2 className="domestico-shop-section-title">Domestico Shop</h2>
                    <ul className="domestico-shop-container">
                        <li className="ds-item-1"></li>
                        <li className="ds-item-2"></li>
                        <li className="ds-item-3"></li>
                        <li className="ds-item-4"></li>
                        <li className="ds-item-5"></li>
                        <li className="ds-item-6"></li>
                        <li className="ds-item-7"></li>
                        <li className="ds-item-8"></li>
                        <li className="ds-item-9"></li>
                    </ul>
                </div>
            </section>
            <section id="section-aesop"className="section-aesop">
                <div className="asop-section-wrapper">
                    <h2 className="aesop-section-title">Aesop</h2>
                    <ul className="aesop-container">
                        <li className="as-item-1"></li>
                        <li className="as-item-2"></li>
                        <li className="as-item-3"></li>
                        <li className="as-item-4"></li>
                        <li className="as-item-5"></li>
                        <li className="as-item-6"></li>
                        <li className="as-item-7"></li>
                        <li className="as-item-8"></li>
                        <li className="as-item-9"></li>
                    </ul>
                </div>
            </section>
            </div>
    );
  }
}
export default Interiorism;