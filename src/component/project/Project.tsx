/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";
import { data } from "../../Data";

const Project = () => {
  return (
    <section id="projects" className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          {data.experiences.map((experience) => {
            return (
              <div className="timeline-item" key={experience.company}>
                <h3>{experience.company}</h3>
                <strong>{experience.title}</strong>
                <span className="timeline-date">
                  {experience.from} - {experience.to}
                </span>
                {experience.summary && <p>{experience.summary}</p>}
                {experience.projects.map((project) => {
                  return (
                    <div className="timeline-project" key={project.name}>
                      <h4>{project.name}</h4>
                      <span className="timeline-date">
                        {project.from} - {project.to}
                      </span>
                      <p>{project.text}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
