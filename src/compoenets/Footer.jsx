import React from "react";

const footerText = [
  {
    title: "github",
    desc: "깃허브에 오시면 더 많은 소스를 볼 수 있습니다.",
    link: "https://github.com/namoong0917",
  },
  {
    title: "blog",
    desc: "블로그에 오시면 더 많은 정보를 볼 수 있습니다.",
    link: "https://south-dev.tistory.com/",
  },
  {
    title: "notion",
    desc: "노션에 오시면 study-log를 볼 수 있습니다.",
    link: "https://www.notion.so/study-Log-a9f88db6a8f24f54aeaa01609795ac67",
  },
  {
    title: "three.js",
    desc: "three.js 로 만든 유리구슬",
    link: "https://glassbead.netlify.app/",
  },
];

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
              {footerText.map((footer, key) => (
                <li key={key}>
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
