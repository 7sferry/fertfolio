/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";
import { data } from "../../Data";

function Personality() {
  return (
    <section id="personality" className="section">
      <div className="container">
        <h2 className="">Personality Traits</h2>
        <div className="personality-grid">
          {data.personalities.map((personality) => {
            return (
              <div className="personality-item" key={personality.title}>
                <h3 className="personality-heading">{personality.title}</h3>
                <p className="personality-description">{personality.text}</p>
              </div>
            );
          })}
        </div>
        ;{" "}
      </div>
    </section>
  );
}

export default Personality;
