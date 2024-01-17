import React from "react";
import Skip from "../compoenets/Skip";
import Header from "../compoenets/Header";
import Intro from "../compoenets/Intro";
import Skill from "../compoenets/Skill";
import Site from "../compoenets/Site";
import Port from "../compoenets/Port";
import Contact from "../compoenets/Contact";
import Footer from "../compoenets/Footer";
import Main from "../compoenets/Main";

const HomeView = () => {
  return (
    <>
      <Skip />
      <Header />

      <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </Main>

      <Footer />
    </>
  );
};

export default HomeView;
