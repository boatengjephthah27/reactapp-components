import React from 'react';
import './sliderPage.css';

const SliderPage = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
            <a href="#home"><i className="fa fa-home" aria-hidden="true"></i><span>Home</span></a>
            <a href="#about"><i className="fa fa-user" aria-hidden="true"></i><span>About</span></a>
            <a href="#gallery"><i className="fa fa-images" aria-hidden="true"></i><span>Gallery</span></a>
            <a href="#projects"><i className="fa fa-briefcase" aria-hidden="true"></i><span>Projects</span></a>
            <a href="#contacts"><i className="fa fa-headset" aria-hidden="true"></i><span>Contacts</span></a>
        </nav>
      </header>

      <div className="container">
          <section id="home" className="hp">Home page</section>
          <section id="about" className="hp">About page</section>
          <section id="gallery" className="hp">Gallery page</section>
          <section id="projects" className="hp">Projects page</section>
          <section id="contacts" className="hp">Contact page</section>
      </div>
    </div>
  )
};

export default SliderPage;