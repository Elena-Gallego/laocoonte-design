import React from 'react';
import biographyimage from "../images/biography_image.jpg";
import "../stylesheets/About.scss";


class About extends React.Component {
    render() {
return (
<div className="about">
    <h2 className="about-title">About</h2>
    <div className="about-hero">
        <img className="biography-image" src={biographyimage} alt="Miguel Angel Acevedo"/>
        <p className="biography-text">"Esculpir es fácil, en un bloque de mármol están todas las formas, sólo hay que quitar lo que sobra" Michelangelo Buonarroti.</p>
    </div>
</div>
);
    }
}

export default About;