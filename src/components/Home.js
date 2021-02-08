import React from 'react';
import '../stylesheets/Home.scss';
import HeroVideo from "../videos/hero-video-prueba.mp4";

class Home extends React.Component {
  render() {
    return (
    <div className="home">
      <div className="home-hero">
        <video className="hero-video" controls autoPlay>
          <source src={HeroVideo} type="video/mp4">
          </source>
        </video>
      </div>
    </div>
    );
  }
}

export default Home;
