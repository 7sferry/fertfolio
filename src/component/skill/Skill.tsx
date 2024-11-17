/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";
import { data } from "../../Data";

const Skill = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="grid">
          {data.skills.map((skill) => {
            return (
              <div className="grid-item">
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
