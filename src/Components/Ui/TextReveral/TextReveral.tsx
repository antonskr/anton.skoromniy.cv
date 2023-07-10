import styles from "./TextReveral.module.scss";
import { gsap } from "gsap";
import { ITextReveralProps } from "./TextReveral.props";
import { useEffect, useRef } from "react";

const TextReveral = ({
  text,
  delay = 0,
  from = "top",
}: ITextReveralProps): JSX.Element => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chars = textRef.current?.querySelectorAll(`span span`);

    if (!chars) return;

    const getInitialPosition = () => {
      switch (from) {
        case "top":
          return -100;
        case "bottom":
          return 100;
        default:
          return 0;
      }
    };

    const initialPosition = getInitialPosition();

    gsap.set(chars, { y: initialPosition, opacity: 0 });

    const timeline = gsap.timeline();

    timeline.to(chars, {
      duration: 0.5,
      y: "0%",
      opacity: 1,
      stagger: 0.05,
      ease: "power2.out",
      delay,
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className={styles.reveral} ref={textRef}>
      {text.split(" ").map((word, idx) => (
        <span className={styles.word} key={`word${idx}`}>
          {word.split("").map((char, idx) => (
            <span className={styles.char} key={`char${idx}`}>
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default TextReveral;
