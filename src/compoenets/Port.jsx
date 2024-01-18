import React, { useEffect, useRef } from "react";
import port01 from "../assets/img/love.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const portText = [
  {
    num: "01",
    title: "어워드에도 올라간 포트폴리오",
    desc: "라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오입니다. 가로 모드와 세로 모드는 매우 인상적이며 특히 리액트와 비트를 이용하여 제작한 것은 더욱 놀랍습니다. 이 사이트는 awwwards.com에도 인정받아 올라간 포트폴리오입니다. 확실히 그의 뛰어난 디자인 스킬과 기술력이 빛을 발휘한 결과물인 것 같습니다.",
    img: port01,
    code: "#",
    view: "#",
    name: "조남웅 포트폴리오",
  },
  {
    num: "02",
    title: "빛나는 밤에 포트폴리오",
    desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
    img: port01,
    code: "#",
    view: "#",
    name: "천설* 포트폴리오",
  },
  {
    num: "03",
    title: "열정이 넘치는 포트폴리오",
    desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
    img: port01,
    code: "#",
    view: "#",
    name: "천설* 포트폴리오",
  },
  {
    num: "04",
    title: "모던한 포트폴리오",
    desc: "블랙 컨셉과 애니메이션이 돋보이는 포트폴리오 사이트입니다. GSAP를 통한 애니메이션과 NEXT.js를 통해 제작된 포트폴리오입니다. pin 애니메이션을 통한 포폴 작업물의 표현 능력이 돋보이는 사이트입니다.",
    img: port01,
    code: "#",
    view: "#",
    name: "이훈* 포트폴리오",
  },
  {
    num: "05",
    title: "가로모드의 정석 포트폴리오",
    desc: "이 포트폴리오는 가로모드를 통해 눈에 띄는 애니메이션 효과를 가진 멋진 작품들이 펼쳐집니다. 세션 간의 부드러운 전환과 흥미로운 움직임이 사용자들에게 색다른 경험을 선사합니다. 사이트에는 탁월한 디자인과 창의적인 애니메이션들이 어우러져, 사용자들에게 인상적인 시각적인 효과를 줍니다. 애니메이션은 적절히 사용되어 사이트를 더욱 생동감 있게 만들어주는 포트폴리오입니다.",
    img: port01,
    code: "/",
    view: "#",
    name: "박준* 포트폴리오",
  },
  {
    num: "06",
    title: "화려함의 정석 포트폴리오",
    desc: "화려하고 세련된 디자인과 다채로운 색상이 사용된 포트폴리오는 사용자를 홀릴 듯한 시각적인 매력을 지니고 있습니다. 포트폴리오 내의 각 작품들은 디테일한 디자인과 탁월한 시각적 표현력을 갖추고 있어, 주인공의 뛰어난 예술적 감각을 느낄 수 있습니다. 화려한 애니메이션 효과와 부드러운 전환은 사이트를 더욱 생동감 있게 만들어주며, 사용자들에게 색다른 경험을 선사합니다.",
    img: port01,
    code: "/",
    view: "#",
    name: "포트폴리오",
  },
  {
    num: "07",
    title: "패럴랙스 정석 포트폴리오",
    desc: "마치 예술작품을 감상하는 듯한 환상적인 경험을 선사하는 포트폴리오입니다. 패럴랙스 스크롤링을 활용하여 구성된 사이트는 사용자들에게 독특하고 멋진 시각적 효과를 제공합니다. 배경과 움직이는 요소들이 조화롭게 어우러져, 사이트 전반에 걸쳐 깊이와 입체감을 느낄 수 있습니다. 스크롤에 따라 움직이는 요소들은 마치 세계를 탐험하는 듯한 느낌을 주며, 사용자들을 끌어들이는 매력적인 요소로 작용합니다.",
    img: port01,
    code: "/",
    view: "#",
    name: "포트폴리오",
  },
  {
    num: "08",
    title: "트랜지션 포트폴리오",
    desc: "화면 전환과 요소들의 흐름이 순조롭고 매끄러운 작품들로 가득한 포트폴리오 사이트입니다. 페이지 간의 트랜지션은 마치 이야기를 풀어내는 듯한 흥미진진한 경험을 선사합니다. 트랜지션 효과의 적절한 활용은 작품들을 보다 동적이고 생동감 있게 만들어줍니다. 각 페이지의 이동이 자연스럽고 사용자들이 원활하게 사이트를 탐색할 수 있도록 배려된 구성은 개발자의 디자인 능력을 잘 보여주는 특징입니다.",
    img: port01,
    code: "/",
    view: "#",
    name: "포트폴리오",
  },
  {
    num: "09",
    title: "스크롤의 정석 포트폴리오",
    desc: "스크롤링을 활용하여 훌륭한 사용자 경험을 선사하는 포트폴리오 사이트입니다. 스크롤을 내리면서 작품들이 순차적으로 나타나고 효과적으로 전환되는 것은 마치 예술적인 이야기를 읽어나가는 듯한 느낌을 주며 사용자를 매료시킵니다. 스크롤의 움직임을 통해 작품들이 서서히 드러나고, 각 페이지 간의 전환은 자연스럽고 부드럽습니다. 이러한 트랜지션과 애니메이션들이 작품들의 내용과 테마를 더욱 강조해줍니다.",
    img: port01,
    code: "/",
    view: "#",
    name: "포트폴리오",
  },
  {
    num: "10",
    title: "모던함의 정석 포트폴리오",
    desc: "현대적이고 세련된 디자인으로 가득한 포트폴리오 사이트입니다. 모던한 느낌과 세심한 디테일이 조화를 이루며, 사용자에게 신선하고 품격 있는 경험을 제공합니다. 사이트의 디자인은 깔끔하고 단정하면서도 특유의 감성과 풍부한 표현력이 느껴집니다. 간결한 레이아웃과 모던한 색상 선택은 주인공의 디자인 감각을 잘 보여주는 특징입니다.",
    img: port01,
    code: "/",
    view: "#",
    name: "포트폴리오",
  },
];

const Port = () => {
  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);
  // useRef는 리액트의 훅(Hook) 중 하나로, 함수형 컴포넌트에서 DOM 요소에 접근하거나, 특정 값들을 기억하고 관리하는 기능을 제공합니다. useRef를 사용하면 클래스형 컴포넌트에서의 this와 비슷한 역할을 할 수 있습니다.

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionsRef.current;

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

- const sectionsRef = useRef([]);: sectionsRef라는 변수를 생성하고 빈 배열로 초기화합니다. 이 배열은 각 포트폴리오 아이템 요소들을 참조하는데 사용됩니다.

- useEffect: 컴포넌트가 렌더링된 후에 실행되는 부수 효과를 정의하는 코드 블록입니다. useEffect 내부에서는 gsap 라이브러리의 ScrollTrigger를 등록하고, 가로 스크롤 애니메이션을 구성합니다.

- gsap.registerPlugin(ScrollTrigger);: gsap 라이브러리에서 ScrollTrigger를 사용할 수 있도록 플러그인을 등록합니다.

- gsap.to(sections, { ... });: gsap의 to 메서드를 사용하여 sections 배열에 있는 요소들에 대한 가로 스크롤 애니메이션을 설정합니다. sections 배열은 sectionsRef를 통해 각 포트폴리오 아이템 요소들을 참조합니다.

- scrollTrigger: gsap의 ScrollTrigger를 이용하여 스크롤 이벤트를 트리거로 하는 애니메이션을 설정합니다. 해당 설정으로 스크롤 이벤트가 horizontal 요소가 시작되고 끝날 때까지 트리거되며, 스크롤 위치에 따라 가로로 이동하는 애니메이션을 적용합니다.

- return () => { ... }: 컴포넌트가 언마운트될 때(clean-up) 실행되는 함수를 정의합니다. scrollTween.kill()를 사용하여 스크롤 애니메이션을 제거합니다. 이렇게 하면 컴포넌트가 언마운트될 때 메모리 누수를 방지할 수 있습니다.

- portText.map((port, key) => ... ): portText 배열을 map 메서드를 사용하여 포트폴리오 아이템들을 렌더링합니다. 각 포트폴리오 아이템은 이미지, 제목, 설명 등의 정보를 가지고 있습니다.

- ref={(el) => (sectionsRef.current[key] = el)}: 각 포트폴리오 아이템 요소에 대해 ref 속성을 사용하여 sectionsRef에 해당 요소를 저장합니다. 이렇게 하면 gsap의 to 메서드에서 애니메이션을 적용할 때 해당 요소들을 참조할 수 있습니다.
*/

  return (
    <section id="port" ref={horizontalRef}>
      <div className="port_inner">
        <div className="port_title">
          portfolio <em>포폴 작업물</em>
        </div>
        <div className="port_wrap">
          {portText.map((port, key) => (
            <article
              className={`port_item p${key + 1}`}
              key={key}
              ref={(el) => (sectionsRef.current[key] = el)}
            >
              <span className="num">{port.num}.</span>
              <a
                href={port.code}
                target="_blank"
                className="img"
                rel="noreferrer noopener"
              >
                <img src={port01} alt="김상준 포트폴리오" />
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
