const Link = () => {
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
};

export default Link;

// - document.querySelectorAll('a[href^="#']'): querySelectorAll 메서드를 사용하여 웹 페이지 내에서 href 속성 값이 #으로 시작하는 모든 앵커 요소들을 선택합니다. 즉, 페이지 내에서 아이디(id)가 있는 앵커들을 선택합니다.

// - forEach((anchor) => { ... }): forEach 메서드를 사용하여 선택된 모든 앵커 요소들에 대해 반복문을 실행합니다.

// - anchor.addEventListener("click", function (e) { ... }): 각 앵커 요소에 클릭 이벤트를 추가합니다. 클릭 이벤트가 발생하면, 해당 함수가 실행됩니다.

// - e.preventDefault(): 클릭 이벤트의 기본 동작을 취소합니다. 기본적으로 앵커를 클릭하면 해당 앵커의 위치로 바로 이동하게 되는데, preventDefault()를 사용하여 이 동작을 막습니다.

// - const targetId = this.getAttribute("href"): 클릭된 앵커의 href 속성 값을 가져와서 targetId 변수에 저장합니다. 이 값은 스크롤하고자 하는 대상 앵커의 아이디를 나타냅니다.

// - const targetElement = document.querySelector(targetId): targetId로 지정된 아이디를 가지는 요소를 querySelector 메서드를 사용하여 선택합니다. 이 요소는 페이지 내에서 스크롤하고자 하는 대상 요소를 의미합니다.

// - if (targetElement) { ... }: targetElement가 유효한 요소인지 체크합니다. 유효한 경우에만 아래 코드를 실행합니다.

// - targetElement.scrollIntoView({ behavior: "smooth" }): targetElement가 가리키는 위치로 페이지를 스크롤합니다. behavior: "smooth" 옵션을 추가하여 부드러운 스크롤을 적용합니다. 이렇게 하면 클릭된 앵커의 위치로 자연스럽게 이동할 수 있습니다.
