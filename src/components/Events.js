
import React from 'react';
import "../stylesheets/Events.scss";
import usmdefaultphoto from "../images/usmdefaultphoto.png";
import cbadefaultphoto from "../images/cbadefaultphoto.png";
import interidefaultphoto from "../images/interidefaultphoto.png";
import {Link} from "react-router-dom";


class Events extends React.Component {
    constructor(props) {
        super(props)
        this.usm = React.createRef();
        this.cba=React.createRef();
        this.interi=React.createRef();
    }

    handleScrollbf = e => {
        e.preventDefault();
        const usm = this.usm.current;
        window.scrollTo({
            top: usm.offsetTop,
            left: 0,
            behavior: "instant"
        });
    }

    handleScrollds = e => {
        e.preventDefault();
        const cba= this.cba.current;
        window.scrollTo({
            top: cba.offsetTop,
            left: 0,
            behavior: "instant"
        });
    };

    handleScrollae = e => {
        e.preventDefault();
        const interi= this.interi.current;
        window.scrollTo({
            top: interi.offsetTop,
            left: 0,
            behavior: "instant"
        });
    };
    render() {
        return (
            <div className="events-wrapper">
                <h2 className="events-title">Eventos</h2>
                <article className="events-articles">
                    <div className="usm-event">
                        <Link onClick={this.handleScrollbf} to= "#homework-by-usm">
                            <img className="usm-default-photo" src={usmdefaultphoto} alt="usm"></img>
                            <h2 className="usm-title">Homework by USM</h2>
                        </Link>
                    </div>
                    <div className="md-cba">
                        <Link onClick={this.handleScrollds} to= "#section-md-cba">
                            <img className="cba-default-photo"src={cbadefaultphoto} alt="md-cba"></img>
                            <h2 className="cba-title">Mercado de Diseño. CBA.</h2>
                        </Link>
                    </div>
                    <div className="interihotel">
                        <Link onClick={this.handleScrollae} to= "#section-interihotel">
                            <img className="interi-default-photo" src={interidefaultphoto} alt="interihotel"></img>
                            <h2 className="interi-title">Interihotel</h2>
                        </Link>
                    </div>
                </article>
                <section id="section-usm"className="section-usm" ref={this.usm}>                       
                            <h2 className="usm-section-title">Homework by USM</h2>
                            <p className="usm-description"> Explora los límites cambiantes entre trabajo y vida doméstica a través  de versátiles esquemas. Esa tendencia de vida nos define como nómadas digitales permitiendo un tercer espacio que se ubica la la línea entre el hábitat y el desarrollo. </p>
                            <span className="usm-date"> Madrid, 2019.</span>
                            <ul className="usm-container">
                                <li className="usm-item-1"></li>
                                <li className="usm-item-2"></li>
                                <li className="usm-item-3"></li>
                                <li className="usm-item-4"></li>
                            </ul>
                    </section>
                    <section id="section-cba"className="section-cba" ref={this.domestico}>
                            <h2 className="cba-section-title">Mercado de Diseño. Círculo de Bellas Artes</h2>
                            <p className="cba-description">Poner en valor a la a-dorada Atenea, diosa de la guerra y ahora también de la tecnología y el grafismo. </p>
                            <span className="cba-date"> Madrid, 2017.</span>
                            <ul className="cba-container">
                                <li className="cba-item-1"></li>
                                <li className="cba-item-2"></li>
                                <li className="cba-item-3"></li>
                                <li className="cba-item-4"></li>
                            </ul>
                    </section>
                    <section id="section-interi"className="section-interi" ref={this.aesop}>
                            <h2 className="interi-section-title">Interihotel</h2>
                            <p className="interi-description">Conexión entre personas y marcas definiendo el interiorismo de los hoteles en los que desearás dormir.</p>
                            <span className="interi-date"> Barcelona, 2018.</span>
                            <ul className="interi-container">
                                <li className="interi-item-1"></li>
                                <li className="interi-item-2"></li>
                                <li className="interi-item-3"></li>
                            </ul>
                    </section>
            </div>
        );
    }
}

export default Events;

