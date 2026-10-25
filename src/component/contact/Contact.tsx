/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";
import { data } from "../../Data";
import SectionTitle from "../SectionTitle";

const Contact = () => {
  return (
    <section id="contact-me" className="contact">
      <div className="container">
        <SectionTitle id="contact-me">Contact Me</SectionTitle>
        <p>Feel free to reach out to me through any of the following channels:</p>
        <div className="contact-links">
          {data.contacts.map((contact) => {
            return (
              <a href={contact.url} className="contact-item" target="_blank" key={contact.name}>
                <contact.icon size={26} color={contact.color} />
                {contact.name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
