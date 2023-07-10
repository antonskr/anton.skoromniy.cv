import styles from './Languages.module.scss'
import TitleWithLine from '../Ui/TitleWithLine/TitleWithline'
import { useEffect, useRef, useState } from 'react'
import Emergence from '../Emergence/Emergence'
import cn from 'classnames'
import { Ilanguage, IRating } from './Languages.props'


const Rating = ({ rating = 0, isVisible }: IRating) => {
  const ratingRef = useRef<HTMLDivElement>(null)

  const fillCirclesIsRatingVisible = () => {
    if (!ratingRef.current) {
      return
    }
    const ratingElems = ratingRef.current?.querySelectorAll(`.${styles.rating__circle}`)
    ratingElems?.forEach((_el, idx) => {
      if (idx < rating) {
        setTimeout(() => {
          _el.classList.add(styles.filled)
        }, 100 * idx)
      }
    })
  }

  useEffect(() => {
    if (isVisible) {
      fillCirclesIsRatingVisible()
    }
  }, [rating, isVisible])

  const ratingElems = [1, 2, 3, 4, 5]

  return (
    <div className={styles.rating} ref={ratingRef}>
      {ratingElems.map((_el, idx) => (
        <div className={cn(styles.rating__circle)} key={`circle${idx}`} />
      ))}
    </div>
  )
}

const Language = ({ language, level, rating }: Ilanguage) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Emergence callbackFn={setIsVisible}>
      <div className={styles.languages__container}>
        <div className={styles.languages__container__textGroup}>
          <p className={styles.languages__container__textGroup__lang}>{language}</p>
          <p className={styles.languages__container__textGroup__level}>{level}</p>
        </div>
        <Rating rating={rating} isVisible={isVisible} />
      </div>
    </Emergence>
  )
}

const Languages = () => {
  return (
    <div className={styles.languages}>
      <Emergence>
        <TitleWithLine title={'Languages'} />
      </Emergence>
      <Emergence>
        <Language language='Ukrainian' level='Native' rating={5} />
      </Emergence>
      <Emergence>
        <Language language='English' level='Intermediate' rating={3} />
      </Emergence>
      <Emergence>
        <Language language='Russian' level='Proficient' rating={5} />
      </Emergence>
    </div>
  )
}

export default Languages
