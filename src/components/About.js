import React from 'react';
import biographyimage from "../images/biography_image.jpg";
import "../stylesheets/About.scss";


class About extends React.Component {
    render() {
return (
<div className="about">
    
    <div className="about-wrapper">
        <h2 className="author-name">Miguel de Acevedo</h2>
        <h3 className="author-job">Interior designer</h3>
        <p className="bio-text">"Esculpir es fácil, en un bloque de mármol están todas las formas, sólo hay que quitar lo que sobra". 
        <span className="michelangelo-spa">Michelangelo Buonarroti.</span>
            <p className="english-bio-text">"Sculpting is easy, in a block of marble there are all the forms, you just have to remove what is left over". 
            <span className="michelangelo-eng">Michelangelo Buonarroti.</span>
            </p>
        </p>
        
        <img className="biography-image" src={biographyimage} alt="Miguel Angel Acevedo"/>        
    </div>
</div>
);
    }
}

export default About;