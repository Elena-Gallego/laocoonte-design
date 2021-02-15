import React from 'react';
import {BiographyImage} from "../images/biography_image.jpg";
import "../stylesheets/About.scss";


class About extends React.Component {
    render() {
return (
<div className="about">
    <div className="about-hero">
        <h1>About</h1>
        <img className="biography-image" src={BiographyImage} alt=""/>
        <p className="biography-text"></p>
    </div>
</div>
);
    }
}

export default About;