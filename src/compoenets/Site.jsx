import React from "react";
import { SITE_TEXT } from "../constants";

const Site = () => {
  return (
    <section id="site">
      <div className="site_inner">
        <h2 className="site_title">
          Site Coding <em>나의 작업물</em>
        </h2>
        <div className="site_wrap">
          {SITE_TEXT.map((site, index) => (
            <article className={`site_item s${index + 1}`} key={index}>
              <span className="num">{index + 1}.</span>
              <div className="text">
                <div>{site.info[0]}</div>
                <div>{site.info[1]}</div>
                <div>{site.info[2]}</div>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="btn">
                <a href={site.code}>code</a>
                <a href={site.view}>view</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site;
