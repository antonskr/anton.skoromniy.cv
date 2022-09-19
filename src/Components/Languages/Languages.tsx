import styles from './Languages.module.scss'
import TitleWithLine from "../Ui/TitleWithLine/TitleWithline";
import cn from 'classnames';
import {useEffect, useRef} from "react";

interface IRating {
    number:  number,
    elems: number[]
}

interface Ilanguage {
    language: string,
    level: string,
    rating: 1 | 2 | 3 | 4 | 5
}

const Rating = ({ number, elems }: IRating) => {
    const ratingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ratingElems = ratingRef.current?.querySelectorAll(`.${styles.rating__circle}`)
        ratingElems?.forEach((_el, idx) => {
            if (idx < number) {
                setTimeout(() => {
                    _el.classList.add(styles.filled)
                },  100 * idx )
            }
        })
    }, [number])

    return (
        <div className={styles.rating} ref={ratingRef}>
            {
                elems.map((_el, idx) => {
                    return (
                        <div className={cn(styles.rating__circle)} key={`circle${idx}`}/>
                    )
                })
            }
        </div>
    )
}

Rating.defaultProps = {
    number: 0,
    elems: [1, 2, 3, 4, 5]
}

const Language = ({ language, level, rating }: Ilanguage) => {
  return (
      <div className={styles.languages__container}>
          <div className={styles.languages__container__textGroup}>
              <p className={styles.languages__container__textGroup__lang}>{ language }</p>
              <p className={styles.languages__container__textGroup__level}>{ level }</p>
          </div>
          <Rating number={rating}/>
      </div>
  )
}

const Languages = () => {
    return (
        <div className={styles.languages}>
            <TitleWithLine title={'Languages'}/>
            <Language language='Ukrainian' level='Native' rating={5} />
            <Language language='Eanglish' level='Pre-intermediate' rating={3} />
            <Language language='Russian' level='Proficient' rating={5} />
        </div>
    )
}

export default Languages;
