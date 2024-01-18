import React from "react";
import aboutImg from "../assets/img/love.png";
import { INTRO_TEXT } from "../constants";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro_inner">
        <h1 className="intro_title">{INTRO_TEXT.title}</h1>
        <div className="intro_lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="intro_text">
          <div className="text_wrap">
            <div>{INTRO_TEXT.desc[0]}</div>
            <div>{INTRO_TEXT.desc[1]}</div>
            <div>{INTRO_TEXT.desc[2]}</div>
          </div>
          <div className="img_wrap">
            <img src={aboutImg} alt="어바웃" />
          </div>
        </div>
        <div className="intro_lines bottom" aria-hidden="true">
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

export default Intro;
