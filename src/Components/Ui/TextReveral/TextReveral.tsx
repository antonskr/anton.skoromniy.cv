import styles from "./TextReveral.module.scss";
import { gsap } from "gsap";
import { ITextReveralProps } from "./TextReveral.props";
import { useEffect, useRef } from "react";

const TextReveral = ({
  text,
  delay = 0,
  from = "top",
  afterDelay = 0,
  desappearAfter = false,
}: ITextReveralProps): JSX.Element => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chars = textRef.current?.querySelectorAll(`span span`);

    if (!chars) return;

    const initialPosition = from === "top" ? -100 : 100;

    gsap.set(chars, { y: initialPosition, opacity: 0 });

    const timeline = gsap.timeline();

    timeline.to(chars, {
      duration: 0.5,
      y: "0%",
      opacity: 1,
      stagger: 0.05,
      ease: "power2.out",
      delay,
      onComplete: () => {
        if (desappearAfter) {
          gsap.to(chars, {
            duration: 0.5,
            y: from === "top" ? 100 : -100,
            opacity: 0,
            stagger: 0.05,
            ease: "power2.in",
            delay: afterDelay,
          });
        }
      },
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className={styles.reveral} ref={textRef}>
      {text.split(" ").map((word, idx) => (
        <>
          <span className={styles.word} key={`word${idx}`}>
            {word.split("").map((char, idx) => (
              <span className={styles.char} key={`char${idx}`}>
                {char}
              </span>
            ))}
          </span>
          {idx < text.split(" ").length - 1 && <>&nbsp;</>}
        </>
      ))}
    </div>
  );
};

export default TextReveral;
