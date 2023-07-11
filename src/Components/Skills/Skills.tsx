import styles from "./Skills.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import TitleWithLine from "../Ui/TitleWithLine/TitleWithline";
import Emergence from "../Emergence/Emergence";
import { ISkillsCard } from "./Skills.props";
import cn from "classnames";
import { elementVisibilityCheck } from "../../Helper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SkillCard = ({ category, skills }: ISkillsCard) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsCardRef = useRef<HTMLDivElement>(null);

  const checkIsVisible = useCallback(() => {
    if (!skillsCardRef.current) return;
    const isSkillsCardVisible = elementVisibilityCheck(
      skillsCardRef.current,
      1
    );
    if (isSkillsCardVisible) {
      setIsVisible(true);
      window.removeEventListener("scroll", checkIsVisible);
    }
  }, []);

  useEffect(() => {
    if (!skillsCardRef.current) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8, // Change this value as per your requirement
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      observerOptions
    );

    observer.observe(skillsCardRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!skillsCardRef.current || !isVisible) return;

    const skillsItems = skillsCardRef.current.querySelectorAll(
      `.${styles.skillsCard__skills__item}`
    );

    if (!skillsItems) return;

    gsap.set(skillsItems, {
      y: -50,
      scaleX: 0,
      scaleY: 0,
      opacity: 0,
    });

    const timeline = gsap.timeline();

    timeline.to(skillsItems, {
      duration: 0.3,
      y: "0%",
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      color: "#384347",
      stagger: 0.1,
      className: cn(
        styles.skillsCard__skills__item,
        styles.skillsCard__skills__item__active
      ),
      ease: "power3.out",
    });

    return () => {
      timeline.kill();
    };
  }, [isVisible]);

  return (
    <div className={styles.skillsCard}>
      <Emergence>
        <div className={styles.skillsCard__category}>{category}</div>
      </Emergence>
      <Emergence>
        <div className={styles.skillsCard__skills} ref={skillsCardRef}>
          {skills.map((skill) => {
            return (
              <p key={skill} className={styles.skillsCard__skills__item}>
                {skill}
              </p>
            );
          })}
        </div>
      </Emergence>
    </div>
  );
};

const Skills = (): JSX.Element => {
  return (
    <div className={styles.skills}>
      <Emergence>
        <TitleWithLine title="Skills" />
      </Emergence>
      <SkillCard
        category={"CORE"}
        skills={[
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "SASS",
          "GIT",
          "REST API",
          "DRY",
          "KISS",
          "Figma",
        ]}
      />
      <SkillCard
        category={"Frontend"}
        skills={[
          "NextJS",
          "React",
          "Redux-toolkit",
          "React-Router",
          "React-Query",
          "Motion",
          "GSAP",
          "WebSockets",
        ]}
      />
      <SkillCard category={"Backend"} skills={["NodeJS", "NestJs"]} />
      <SkillCard category={"Headless CMS"} skills={["Directus", "Strapi"]} />
    </div>
  );
};

export default Skills;
