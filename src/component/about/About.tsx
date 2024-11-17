/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";
import photo from "./Photo";
import { GatsbyImage } from "gatsby-plugin-image";
import { data } from "../../Data";

export const About = () => {
  return (
    <section id="about-me" className="about">
      <div className="container">
        <h2 className="about-me-title">About Me</h2>
        <GatsbyImage image={photo()} className="bio-picture" alt="Ferry" title={data.siteConfig.realName} />
        <p>{data.about.text}</p>
      </div>
    </section>
  );
};

export default About;
