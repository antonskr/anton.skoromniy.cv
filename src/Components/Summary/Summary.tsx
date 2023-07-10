import { useEffect, useRef } from "react";
import styles from "./Summary.module.scss";
import TitleWithLine from "../Ui/TitleWithLine/TitleWithline";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Summary = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // Fill text animation
  useEffect(() => {
    const section = sectionRef.current;
    const fill = fillRef.current;

    let ctx = gsap.context(() => {
      const sock = gsap.timeline();

      // Section inversion transition
      sock.fromTo(
        fill,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
          ease: "none",
          duration: 0,
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "none",
          duration: 1,
        }
      );

      ScrollTrigger.create({
        animation: sock,
        trigger: section,
        start: "top",
        end: "bottom",
        scrub: 1,
        markers: false,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.summary} ref={sectionRef}>
      <TitleWithLine title={"Summary"} />
      <div className={styles.description}>
        <div className={styles.description__text}>
          JavaScript Web Developer with more than 2.5 years of experience in
          JavaScript, React, NextJS Well-aqcuainted with develop methodologies.
          <br /> <br />A supporter of soft power. This allows me to be
          successful in the implementation of my projects. I adhere to the
          philosophy of constant development: spiritual, aesthetic and
          professional.
        </div>
        <div className={styles.description__placeholder} ref={fillRef}>
          JavaScript Web Developer with more than 2.5 years of experience in
          JavaScript, React, NextJS Well-aqcuainted with develop methodologies.
          <br /> <br />A supporter of soft power. This allows me to be
          successful in the implementation of my projects. I adhere to the
          philosophy of constant development: spiritual, aesthetic and
          professional.
        </div>
      </div>
    </div>
  );
};

export default Summary;
