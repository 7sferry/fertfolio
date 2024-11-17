/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";
import { data } from "../../Data";

const Impact = () => {
  return (
    <section id="impact" className="impactful-works">
      <div className="container">
        <h2>Impactful Works</h2>
        <div className="works">
          {data.impacts.map((impact) => {
            return (
              <div className="work-entry">
                <h3>{impact.title}</h3>
                <p>{impact.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
