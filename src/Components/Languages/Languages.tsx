import styles from './Languages.module.scss'
import TitleWithLine from "../Ui/TitleWithLine/TitleWithline";
import cn from 'classnames';
import {useEffect, useRef, useState} from "react";
import { elementVisibilityCheck } from "../../Helper";
import Emergence from "../Emergence/Emergence";

interface IRating {
    rating: number
    elems: number[]
    isVisible: boolean
}

interface Ilanguage {
    language: string,
    level: string,
    rating: number
}

const Rating = ({rating, elems, isVisible}: IRating) => {
    const ratingRef = useRef<HTMLDivElement>(null);

    const fillCirclesIsRatingVisible = () => {
        if (!ratingRef.current) { return; }
            let ratingElems = ratingRef.current?.querySelectorAll(`.${styles.rating__circle}`);
            ratingElems?.forEach((_el, idx) => {
                if (idx < rating) {
                    setTimeout(() => {
                        _el.classList.add(styles.filled)
                    }, 100 * idx)
                }
            })
    }

    useEffect(() => {
        if (isVisible)
        {
            fillCirclesIsRatingVisible();
        }
    }, [rating, isVisible])
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
    rating: 0,
    elems: [1, 2, 3, 4, 5]
}

const Language = ({language, level, rating}: Ilanguage) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
       <Emergence callbackFn={setIsVisible}>
           <div className={styles.languages__container}>
               <div className={styles.languages__container__textGroup}>
                   <p className={styles.languages__container__textGroup__lang}>{language}</p>
                   <p className={styles.languages__container__textGroup__level}>{level}</p>
               </div>
               <Rating rating={rating} isVisible={isVisible}/>
           </div>
       </Emergence>
    )
}

const Languages = () => {
    return (
        <div className={styles.languages}>
            <Emergence>
                <TitleWithLine title={'Languages'}/>
            </Emergence>
            <Language language='Ukrainian' level='Native' rating={5}/>
            <Language language='English' level='Pre-intermediate' rating={3}/>
            <Language language='Russian' level='Proficient' rating={5}/>
        </div>
    )
}

export default Languages;
