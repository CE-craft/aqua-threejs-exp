import Header from "../components/Header";
import Button from "../components/Button";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Home = () => {
  const homePage = useRef();
  const sectionOne = useRef();

  useEffect(() => {
    console.log(homePage);
    console.log(window.pageYOffset);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".container", {
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        toggleActions: "play none none reverse",
      },
      y: -1000,
      duration: 2,
      ease: "Power1.easeOut",
    });

    gsap.from(".hero__heading", {
      scrollTrigger: {
        trigger: ".hero__heading",
        toggleActions: "restart none none reverse",
      },
      opacity: 0,
      scale: 0.2,
      duration: 3,
      translateY: 50,
      ease: "Power4.easeOut",
    });

    gsap.from(".sub-heading", {
      scrollTrigger: {
        trigger: ".section-1",
        start: "bottom bottom",
        toggleActions: "restart none reverse none",
      },
      letterSpacing: -20,
      transformOrigin: "right",
      opacity: 0,
      duration: 3,
      ease: "Power4.easeOut",
    });

    gsap.from("span", {
      scrollTrigger: {
        trigger: ".section-1",
        toggleActions: "restart none none reverse",
        //start: "top top",
      },
      stagger: 0.1,
      translateY: 50,
      opacity: 0,
      duration: 4,
      ease: "Power4.easeOut",
    });

    gsap.from(".paragraph", {
      scrollTrigger: {
        trigger: ".section-1",
        toggleActions: "restart none none reverse",
      },
      translateY: 50,
      transformOrigin: "bottom",
      opacity: 0,
      duration: 4,
      ease: "Power4.easeOut",
    });
  });

  return (
    <div className="container" ref={homePage}>
      <Header />
      <header className="hero">
        <h2 className="hero__heading">Under Water Experience</h2>
      </header>
      <section className="section-1" ref={sectionOne}>
        <div className="section-1__title">
          <h4 className="sub-heading section-1__sub-heading u-margin-bottom-m">
            Theatre
          </h4>
          <h1 className="heading-1 section-1__heading">
            <span>U</span>
            <span>n</span>
            <span>d</span>
            <span>e</span>
            <span>r</span>
            <br />
            <span>W</span>
            <span>a</span>
            <span>t</span>
            <span>e</span>
            <span>r</span>
          </h1>
        </div>

        <p className="paragraph section-1__paragraph">
          Live the unique experiance of underwater theatre, a unique form of
          presenting art.
        </p>
        <Button className="section-1__btn" />
      </section>
    </div>
  );
};
export default Home;
