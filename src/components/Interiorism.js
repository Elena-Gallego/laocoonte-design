
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
            this.domestico=React.createRef();
            this.aesop=React.createRef();
        }

        handleScrollbf = e => {
            e.preventDefault();
            const brava = this.brava.current;
            window.scrollTo({
                top: brava.offsetTop,
                left: 0,
                behavior: "instant"
            });
        }

        handleScrollds = e => {
            e.preventDefault();
            const domestico= this.domestico.current;
            window.scrollTo({
                top: domestico.offsetTop,
                left: 0,
                behavior: "instant"
            });
        };

        handleScrollae = e => {
            e.preventDefault();
            const aesop= this.aesop.current;
            window.scrollTo({
                top: aesop.offsetTop,
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
                            <Link onClick={this.handleScrollbf} to= "#section-brava-fabrics">
                                <img className="bf-default-photo" src={bfdefaultphoto} alt="brava-shop"></img>
                                <h2 className="bf-title">Brava Fabrics</h2>
                            </Link>
                        </div>
                        <div className="domestico-shop">
                            <Link onClick={this.handleScrollds} to= "#section-domestico-shop">
                                <img className="ds-default-photo"src={dsdefaultphoto} alt="domestico-shop"></img>
                                <h2 className="ds-title">Domestico Shop</h2>
                            </Link>
                        </div>
                        <div className="aesop">
                            <Link onClick={this.handleScrollae} to= "#section-aesop">
                                <img className="ae-default-photo" src={aedefaultphoto} alt="aesop"></img>
                                <h2 className="ae-title">Aesop</h2>
                            </Link>
                        </div>
                    </article>
                    <section id="section-brava-fabrics"className="section-brava-fabrics" ref={this.brava}>
                        <div className="brava-fabrics-section-wrapper">
                            <h2 className="brava-fabrics-section-title">Brava Fabrics Store</h2>
                            <p className="bf-description">El Mediterráneo y lo decó se alían para dar concepto a este espacio donde lo natural y lo sostenible son la constante en todos los procesos creativos y de producción. </p>
                            <span className="bf-date"> Madrid, 2020.</span>
                            <ul className="brava-fabrics-container">
                                <li className="bf-item-1"></li>
                                <li className="bf-item-2"></li>
                                <li className="bf-item-3"></li>
                                <li className="bf-item-4"></li>
                                <li className="bf-item-5"></li>
                                <li className="bf-item-6"></li>
                            </ul>
                        </div>
                    </section>
                    <section id="section-domestico-shop"className="section-domestico-shop" ref={this.domestico}>
                        <div className="domestico-shop-section-wrapper">
                            <h2 className="domestico-shop-section-title">Domestico Shop Store</h2>
                            <p className="ds-description">La emoción de los materiales nobles, el estatus, el nuevo lujo italiano, la artesanía, los clásicos atemporales y el diseño honesto. </p>
                            <span className="ds-date"> Madrid, 2019.</span>
                            <ul className="domestico-shop-container">
                                <li className="ds-item-1"></li>
                                <li className="ds-item-2"></li>
                                <li className="ds-item-3"></li>
                                <li className="ds-item-4"></li>
                                <li className="ds-item-5"></li>
                                <li className="ds-item-6"></li>
                            </ul>
                        </div>
                    </section>
                    <section id="section-aesop"className="section-aesop" ref={this.aesop}>
                        <div className="aesop-section-wrapper">
                            <h2 className="aesop-section-title">Aesop</h2>
                            <p className="ae-description">Proyecto corner comercial Aesop para Doméstico Shop.</p>
                            <span className="ae-date"> Barcelona, 2019.</span>
                            <ul className="aesop-container">
                                <li className="ae-item-1"></li>
                                <li className="ae-item-2"></li>
                                <li className="ae-item-3"></li>
                                <li className="ae-item-4"></li>
                                <li className="ae-item-5"></li>
                                <li className="ae-item-6"></li>
                                <li className="ae-item-7"></li>
                                <li className="ae-item-8"></li>
                                <li className="ae-item-9"></li>
                            </ul>
                        </div>
                    </section>
                </div>
            );
        }
}
export default Interiorism;