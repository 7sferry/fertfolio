/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";

function Personality() {
  return (
    <section id="personality" className="section">
      <div className="container">
        <h2 className="">My Personality</h2>
        <div className="personality-grid">
          <div className="personality-item">
            <h3 className="personality-heading">ISTJ (Myers-Briggs)</h3>
            <p className="personality-description">
              Methodical, detail-oriented, and precise, I approach problems with logical and structured solutions.
            </p>
          </div>
          <div className="personality-item">
            <h3 className="personality-heading">Type 5 (Enneagram)</h3>
            <p className="personality-description">
              A thinker and learner, I thrive on acquiring knowledge, diving deep into complex topics to understand and
              innovate.
            </p>
          </div>
          <div className="personality-item">
            <h3 className="personality-heading">Conscientious (DiSC)</h3>
            <p className="personality-description">
              Analytical and focused, I prioritize efficiency and clarity, delivering solutions that are effective and
              sustainable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Personality;
