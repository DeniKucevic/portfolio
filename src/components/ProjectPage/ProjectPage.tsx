import React from "react";
import { Parallax } from "react-parallax";
import Project from "./Project";
import projects from "./projects";
import parallax from "../../assets/images/parallax.jpg";

const ProjectPage = () => {
  return (
    <div>
      <Parallax bgImage={parallax} bgImageAlt='astronaut' strength={-210}>
        <div className='project'>
          {projects.map((project) => {
            return (
              <Project
                image={project.image}
                desc={project.desc}
                stack={project.stack}
                live={project.live}
                github={project.github}
                key={project.id}
              />
            );
          })}
        </div>
      </Parallax>
    </div>
  );
};

export default ProjectPage;
