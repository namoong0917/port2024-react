import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./pages/HomeView";
import Lenis from "./utils/lenis.js";
import Link from "./utils/link.js";
// import AboutView from "./views/AboutView";

const App = () => {
  useEffect(() => {
    Lenis();
    Link();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        {/* <Route path="/about" element={<AboutView />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// - 리액트 훅(Hook)은 함수형 컴포넌트에서 상태(state)와 다양한 기능을 추가적으로 사용할 수 있도록 도와주는 기능입니다.
// - 리액트 훅은 React 버전 16.8부터 도입되었으며, 클래스형 컴포넌트를 사용하지 않고도 상태 관리와 다른 리액트 기능들을 사용할 수 있게 해줍니다.

// - useEffect() 함수는 컴퍼넌트가 렌더링 될 때마다 특정 작업(Sied effect)을 실행할 수 있도록 하는 리액트 훅(Hook)입니다.
// - useEffect를 사용하여 특정 작업을 처리하면, 컴포넌트의 생명주기에 따라 특정 작업을 수행할 수 있습니다.
// - useEffect는 컴포넌트가 렌더링되고 난 이후에 실행되며, 매 렌더링 시마다 실행됩니다.
// - 그러나 useEffect의 동작을 조절하기 위해 의존성 배열(dependency array)을 사용할 수 있습니다.

// - 컴포넌트의 생명주기(Lifecycle)는 컴포넌트가 생성되고, 업데이트되고, 소멸되는 과정을 의미합니다.
// - 리액트 컴포넌트는 특정 시점에 호출되는 생명주기 메서드를 가지고 있으며, 이를 활용하여 컴포넌트의 동작을 제어하고 원하는 작업을 수행할 수 있습니다.
