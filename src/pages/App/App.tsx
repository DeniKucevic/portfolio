import React from "react";
import Particles from "react-tsparticles";
import MouseScroll from "../../components/MouseScroll";
import ProjectPage from "../../components/ProjectPage";
import ScrollMotion from "../../components/ScrollMotion";
import "./App.css";
import options from "./particles-options";
import Footer from "../../components/Footer";

const App = () => {
  return (
    <div className='App'>
      <div className='hero-wrapper'>
        <Particles id='tsparticles' options={options} />
        <h1 className='hero-text'>DENIS KUCEVIC</h1>
        <span className='hero-text'>BRIXI</span>
        <h2 className='hero-text'>Fullstack Developer</h2>
        <div className='mouse-scroll'>
          <MouseScroll />
        </div>
      </div>
      <div className='test1'>
        <ScrollMotion />
      </div>
      <div>
        <ProjectPage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
