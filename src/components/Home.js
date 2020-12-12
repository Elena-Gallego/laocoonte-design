import React from 'react';
import '../stylesheets/Home.scss';
import InteriorismPhoto from "../images/4.JPG";
import EventsPhoto from "../images/Events Photo.jpg";
import ProjectsPhoto from "../images/Projects Photo.jpg";
import HeroPhoto from "../images/homebackground.jpg";

class Home extends React.Component {
  render() {
    return (<div className="home">
      <hero className="home-hero"><img className="hero-photo"src={HeroPhoto} alt="foto"/></hero>
      <div className="sections-wrapper">
        <section className="interiorism-section">
          <h2 className="h2-interiorism">Interiorismo</h2>
          <img className="interiorism-photo" src={InteriorismPhoto} alt="foto"/>
        </section>
        <section className="events-section">
          <h2 className="h2-events">Eventos</h2>
          <img className="events-photo"src={EventsPhoto} alt="foto"/>
        </section>
        <section className="projects-section">
          <h2 className="h2-projects">Proyectos</h2>
          <img className="projects-photo"src={ProjectsPhoto} alt="foto"/>
        </section>
      </div>
    </div>
    );
    
  }
}

export default Home;
