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
                <div className="experience-header">
                  <h3 className="experience-company">{experience.company}</h3>
                  <span className="experience-date">
                    {experience.from} - {experience.to}
                  </span>
                </div>
                <p className="experience-role">{experience.title}</p>
                {experience.summary && <p className="experience-summary">{experience.summary}</p>}
                {experience.projects.length > 0 && (
                  <div className="experience-projects">
                    {experience.projects.map((project) => {
                      return (
                        <div className="timeline-project" key={project.name}>
                          <div className="project-header">
                            <h4 className="project-name">{project.name}</h4>
                            <span className="project-date">
                              {project.from} - {project.to}
                            </span>
                          </div>
                          <p className="project-text">{project.text}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
