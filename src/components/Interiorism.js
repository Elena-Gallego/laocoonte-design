import React from "react";
import "../stylesheets/Interiorism.scss";
import bfdefaultphoto from "../images/default-brava.jpg";
import dsdefaultphoto from "../images/default-domestico.jpg";
import { Link } from "react-router-dom";

class Interiorism extends React.Component {
  constructor(props) {
    super(props);
    this.brava = React.createRef();
    this.domestico = React.createRef();
  }

  handleScrollbf = (e) => {
    e.preventDefault();
    const brava = this.brava.current;
    window.scrollTo({
      top: brava.offsetTop,
      left: 0,
      behavior: "instant",
    });
  };

  handleScrollds = (e) => {
    e.preventDefault();
    const domestico = this.domestico.current;
    window.scrollTo({
      top: domestico.offsetTop,
      left: 0,
      behavior: "instant",
    });
  };

  render() {
    return (
      <div className="interiorism-wrapper">
        <h2 className="interiorism-title">Interiorismo</h2>
        <article className="interiorism-articles">
          <div className="brava-fabrics">
            <Link onClick={this.handleScrollbf} to="#section-brava-fabrics">
              <img
                className="bf-default-photo"
                src={bfdefaultphoto}
                alt="brava-shop"
              ></img>
              <h2 className="bf-title">Brava Fabrics</h2>
            </Link>
          </div>
          <div className="domestico-shop">
            <Link onClick={this.handleScrollds} to="#section-domestico-shop">
              <img
                className="ds-default-photo"
                src={dsdefaultphoto}
                alt="domestico-shop"
              ></img>
              <h2 className="ds-title">Domestico Shop</h2>
            </Link>
          </div>
        </article>
        <section
          id="section-brava-fabrics"
          className="section-brava-fabrics"
          ref={this.brava}
        >
          <h2 className="brava-fabrics-section-title">Brava Fabrics Store</h2>
          <p className="bf-description">
            El Mediterráneo y lo decó se alían para dar concepto a este espacio
            donde lo natural y lo sostenible son la constante tanto en procesos
            creativos como de producción.{" "}
          </p>
          <span className="bf-date"> Madrid, 2020.</span>
          <ul className="brava-fabrics-container">
            <li className="bf-item-1"></li>
            <li className="bf-item-2"></li>
            <li className="bf-item-3"></li>
            <li className="bf-item-4"></li>
            <li className="bf-item-5"></li>
            <li className="bf-item-6"></li>
          </ul>
        </section>
        <section
          id="section-domestico-shop"
          className="section-domestico-shop"
          ref={this.domestico}
        >
          <h2 className="domestico-shop-section-title">Domestico Shop Store</h2>
          <p className="ds-description">
            La emoción de los materiales nobles, el estatus, el nuevo lujo
            italiano, la artesanía, clásicos atemporales y diseño honesto.{" "}
          </p>
          <span className="ds-date"> Madrid, 2019.</span>
          <ul className="domestico-shop-container">
            <li className="ds-item-1"></li>
            <li className="ds-item-2"></li>
            <li className="ds-item-3"></li>
            <li className="ds-item-4"></li>
            <li className="ds-item-5"></li>
            <li className="ds-item-6"></li>
          </ul>
        </section>
      </div>
    );
  }
}
export default Interiorism;
