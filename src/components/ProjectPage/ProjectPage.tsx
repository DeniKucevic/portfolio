import React from "react";
import { Parallax } from "react-parallax";
import parallaxImage from "../../assets/images/parralax.png";

const ProjectPage = () => {
  const image = parallaxImage;
  return (
    <div>
      <Parallax
        bgImage='https://www.ubackground.com/_ph/12/932574906.jpg'
        bgImageAlt='the dog'
        strength={-310}>
        <div className='page-4'></div>
      </Parallax>
    </div>
  );
};

export default ProjectPage;
