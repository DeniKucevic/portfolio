import React from "react";
import Particles from "react-tsparticles";
import MouseScroll from "../../components/MouseScroll";
import ProjectPage from "../../components/ProjectPage/ProjectPage";
import ScrollMotion from "../../components/ScrollMotion";
import "./App.css";
import options from "./particles-options";
import Footer from "../../components/Footer/Footer";

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
        <ProjectPage></ProjectPage>
      </div>
      <div className='test3'></div>
      <div className='parallax-content'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
