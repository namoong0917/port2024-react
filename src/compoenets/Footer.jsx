import React from "react";
import { FOOTER_TEXT } from "../constants";

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer_inner">
        <div className="footer_text">
          <span>namoong0917</span>
          <span>© webs</span>
        </div>
        <div className="footer_info">
          <div className="left">
            <div className="title">
              <a href="/">sign up</a>
            </div>
            <p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              {FOOTER_TEXT.map((footer, index) => (
                <li key={index}>
                  <a href={footer.link}>{footer.title}</a>
                  <em>{footer.desc}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer_right">
          © 2024 namoong0917
          <br />이 사이트는 react.js를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
