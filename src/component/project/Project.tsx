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
        <h2>Projects & Experiences</h2>
        <div className="timeline">
          {data.projects.map((project) => {
            return (
              <div className="timeline-item" key={project.name}>
                <h3>
                  {project.company} - {project.name}
                </h3>
                <span className="timeline-date">
                  {project.from} - {project.to}
                </span>
                <p>{project.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
//The legacy codebase was difficult to develop and
//                             maintain, with various inefficiencies and challenges. My goal was to refactor the legacy
//                             code to improve its structure, readability, and maintainability. I refactored the code to
//                             follow Clean Code principles, incorporating a more modular architecture. I implemented
//                             features like a centralized exception handler, request validation, programming to
//                             interfaces, and dependency injection to streamline the development process. As a result, we
//                             now have cleaner, more maintainable code in several parts of the legacy system,
//                             significantly improving our development speed and reducing errors.<br/>
//                             We encountered concurrency issues, specifically Lost Updates and Write Skew, which led to
//                             data inconsistencies and anomalies. My task was to resolve these concurrency problems and
//                             ensure data integrity across the system. I implemented optimizations to prevent Write Skew
//                             and Lost Updates, such as introducing proper locking mechanisms and adjusting transaction
//                             isolation levels. As a result, the previous data anomalies were prevented, and the system
//                             now operates with improved consistency and reliability.
export default Project;
