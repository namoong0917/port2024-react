import React from "react";
import { CONTACT_TEXT } from "../constants";

const contact = () => {
  return (
    <section id="contact">
      <div className="contact_inner">
        <h2 className="contact_title">Contact</h2>
        <div className="contact_text">
          <div className="text">
            {CONTACT_TEXT.map((contact, index) => (
              <div key={index}>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="contact_lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
};

export default contact;
