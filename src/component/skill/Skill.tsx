/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";
import { data } from "../../Data";
import SectionTitle from "../SectionTitle";

const Skill = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionTitle id="skills">Skills</SectionTitle>
        <div className="grid">
          {data.skills.map((skill) => {
            return (
              <div className="grid-item" key={skill.name}>
                <div className="content">
                  <h3>
                    {skill.emoji} {skill.name}
                  </h3>
                  <p>{skill.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
