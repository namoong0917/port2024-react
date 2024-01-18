import React, { useEffect, useRef } from "react";
// import port01 from "../assets/img/love.png";

import { PORT_TEXT } from "../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Port = () => {
  const horizontalRef = useRef(null);
  const sectionRef = useRef([]);
  // useRef는 리액트의 훅(Hook) 중 하나로, 함수형 컴포넌트에서 DOM 요소에 접근하거나, 특정 값들을 기억하고 관리하는 기능을 제공합니다. useRef를 사용하면 클래스형 컴포넌트에서의 this와 비슷한 역할을 할 수 있습니다.

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -120 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top 56px",
        end: () => "+=" + horizontal.offsetWidth,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  /*
- const horizontalRef = useRef(null);: horizontalRef라는 변수를 생성하고 useRef 훅으로 초기화합니다. 이 변수는 가로 스크롤이 적용될 부모 요소를 참조하는데 사용됩니다.

- const sectionRef = useRef([]);: sectionRef라는 변수를 생성하고 빈 배열로 초기화합니다. 이 배열은 각 포트폴리오 아이템 요소들을 참조하는데 사용됩니다.

- useEffect: 컴포넌트가 렌더링된 후에 실행되는 부수 효과를 정의하는 코드 블록입니다. useEffect 내부에서는 gsap 라이브러리의 ScrollTrigger를 등록하고, 가로 스크롤 애니메이션을 구성합니다.

- gsap.registerPlugin(ScrollTrigger);: gsap 라이브러리에서 ScrollTrigger를 사용할 수 있도록 플러그인을 등록합니다.

- gsap.to(sections, { ... });: gsap의 to 메서드를 사용하여 sections 배열에 있는 요소들에 대한 가로 스크롤 애니메이션을 설정합니다. sections 배열은 sectionRef를 통해 각 포트폴리오 아이템 요소들을 참조합니다.

- scrollTrigger: gsap의 ScrollTrigger를 이용하여 스크롤 이벤트를 트리거로 하는 애니메이션을 설정합니다. 해당 설정으로 스크롤 이벤트가 horizontal 요소가 시작되고 끝날 때까지 트리거되며, 스크롤 위치에 따라 가로로 이동하는 애니메이션을 적용합니다.

- return () => { ... }: 컴포넌트가 언마운트될 때(clean-up) 실행되는 함수를 정의합니다. scrollTween.kill()를 사용하여 스크롤 애니메이션을 제거합니다. 이렇게 하면 컴포넌트가 언마운트될 때 메모리 누수를 방지할 수 있습니다.

- portText.map((port, key) => ... ): portText 배열을 map 메서드를 사용하여 포트폴리오 아이템들을 렌더링합니다. 각 포트폴리오 아이템은 이미지, 제목, 설명 등의 정보를 가지고 있습니다.

- ref={(el) => (sectionRef.current[key] = el)}: 각 포트폴리오 아이템 요소에 대해 ref 속성을 사용하여 sectionRef에 해당 요소를 저장합니다. 이렇게 하면 gsap의 to 메서드에서 애니메이션을 적용할 때 해당 요소들을 참조할 수 있습니다.
*/

  return (
    <section id="port" ref={horizontalRef}>
      <div className="port_inner">
        <div className="port_title">
          portfolio <em>포폴 작업물</em>
        </div>
        <div className="port_wrap">
          {PORT_TEXT.map((port, index) => (
            <article
              className={`port_item p${index + 1}`}
              key={index}
              ref={(el) => (sectionRef.current[index] = el)}
            >
              <span className="num">{port.num}.</span>
              <a
                href={port.code}
                target="_blank"
                className="img"
                rel="noreferrer noopener"
              >
                <img src={port.img} alt="김상준 포트폴리오" />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>
              <a
                href={port.view}
                target="_blank"
                className="site"
                rel="noreferrer noopener"
              >
                사이트 보기
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
