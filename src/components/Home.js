import React from 'react';
import '../stylesheets/Home.scss';
import InteriorismPhoto from "../images/1.jpeg";

class Home extends React.Component {
  render() {
    return <div>
      <section className="interiorismo-section">
        <img src={InteriorismPhoto} alt="foto"/>
      </section>
    </div>;
  }
}

export default Home;
