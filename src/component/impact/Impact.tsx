/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";
import { data } from "../../Data";
import SectionTitle from "../SectionTitle";

const Impact = () => {
  return (
    <section id="impact" className="impactful-works">
      <div className="container">
        <SectionTitle id="impact">Impactful Works</SectionTitle>
        <div className="works">
          {data.impacts.map((impact) => {
            return (
              <div className="work-entry" key={impact.title}>
                <h3>{impact.title}</h3>
                <span className="impact-context">{impact.context}</span>
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
