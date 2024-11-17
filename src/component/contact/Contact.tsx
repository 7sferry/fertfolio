/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../Data";

const Contact = () => {
  return (
    <section id="contact-me" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me through any of the following channels:</p>
        <div className="contact-links">
          {data.contacts.map((contact) => {
            return (
              <a href={contact.url} className="contact-item" target="_blank" key={contact.name}>
                <FontAwesomeIcon icon={contact.icon} size="lg" color={contact.color} />
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
