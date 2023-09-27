import Header from "../Header";
import Intro from "../Intro";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import Experience from "../Experience";
import Work from "../Work";
import Testimonials from "../Testimonials";
import GetInTouch from "../GetInTouch";
import Footer from "../Footer";

import "./style.scss";

const index = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Intro />
        <AboutMe />
        <Skills />
        <Experience />
        <Work />
        <Testimonials />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
};

export default index;
