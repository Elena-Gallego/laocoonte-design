
import React from 'react';
import "../stylesheets/Interiorism.scss";
import bfdefaultphoto from "../images/default-brava.jpg";
import dsdefaultphoto from "../images/default-domestico.jpg";
import aedefaultphoto from "../images/default-aesop.jpg";


class Interiorism extends React.Component {
        render() {
    return (
        <div className="interiorism-wrapper">
            <h2 className="interiorism-title">Interiorismo</h2>
        <article className="interiorism-articles">
            <a className="brava-fabrics-content" href="#section-brava-fabrics">
                <img className="bf-default-photo" src={bfdefaultphoto} alt="brava-shop"></img>
                <h2 className="bf-title">Brava Fabrics</h2>
            </a>
            <a className="domestico-shop-content"href="#section-domestico-shop">
                <img className="ds-default-photo"src={dsdefaultphoto} alt="domestico-shop"></img>
                <h2 className="ds-title">Domestico Shop</h2>
            </a> <a className="aesop-content" href="#section-aesop">
                <img className="ae-default-photo" src={aedefaultphoto} alt="aesop"></img>
                <h2 className="ae-title">Aesop</h2>
            </a>
        </article>
            <section id="section-brava-fabrics"className="section-brava-fabrics"></section>
            <section id="section-domestico-shop"className="section-domestico-shop"></section>
            <section id="section-aesop"className="section-aesop"></section>
            </div>
    );
  }
}
export default Interiorism;