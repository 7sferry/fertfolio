import React from "react";
import "./index.css";
import Header from "../component/header/Header";
import About from "../component/about/About";
import Skill from "../component/skill/Skill";
import Menu from "../component/menubar/Menu";
import Project from "../component/project/Project";
import Impact from "../component/impact/Impact";
import Contact from "../component/contact/Contact";
import Footer from "../component/footer/Footer";
import Seo from "../component/Seo";

function IndexPage() {
  return (
    <>
      <Menu />
      <Header />
      <About />
      <Skill />
      <Project />
      <Impact />
      <Contact />
      <Footer />
      {/*<DarkModeToggle/>*/}
    </>
  );
}

export function Head() {
  return <Seo />;
}

export default IndexPage;
