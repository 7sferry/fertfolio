/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";
import photo from "./Photo";
import { GatsbyImage } from "gatsby-plugin-image";
import { data } from "../../Data";
import SectionTitle from "../SectionTitle";

export const About = () => {
  return (
    <section id="about-me" className="about">
      <div className="container">
        <SectionTitle id="about-me" className="about-me-title">
          About Me
        </SectionTitle>
        <GatsbyImage image={photo()} className="bio-picture" alt="Ferry" title={data.siteConfig.realName} />
        <p>{data.about.text}</p>
      </div>
    </section>
  );
};

export default About;
