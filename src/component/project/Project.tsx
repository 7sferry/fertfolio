/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";
import { data } from "../../Data";
import SectionTitle from "../SectionTitle";

type Period = { from: string; to: string };

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const toMonthIndex = (date: string) => {
  if (date === "Present") {
    return Number.MAX_SAFE_INTEGER;
  }
  const [month, year] = date.split(" ");
  return Number(year) * 12 + MONTHS.indexOf(month);
};

const byEndDescThenStartAsc = (a: Period, b: Period) =>
  toMonthIndex(b.to) - toMonthIndex(a.to) || toMonthIndex(a.from) - toMonthIndex(b.from);

const Project = () => {
  return (
    <section id="projects" className="experience">
      <div className="container">
        <SectionTitle id="projects">Experience</SectionTitle>
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
                    {[...experience.projects].sort(byEndDescThenStartAsc).map((project) => {
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
