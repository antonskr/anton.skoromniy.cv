import { useEffect, useRef } from 'react'
import styles from './TitleWithLine.module.scss'
import cn from 'classnames'
import { elementVisibilityCheck } from '../../../Helper'

interface TitleWithLineProps {
  title: string
}

const TitleWithLine = ({ title }: TitleWithLineProps): JSX.Element => {
  const titleRef = useRef<HTMLDivElement>(null)

  const fillIsTitleVisible = () => {
    if (titleRef.current) {
      const isVisible = elementVisibilityCheck(titleRef.current, 1)
      titleRef.current.classList.toggle(styles.titleWithLine_visible, isVisible)
    }
  }

  const resetFilledTitle = () => {
    titleRef.current?.classList.remove(styles.titleWithLine_visible)
  }

  const isMobileVersion = () => {
    const width =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    return width <= 768
  }

  const controlScrollListener = () => {
    if (isMobileVersion()) {
      window.addEventListener('scroll', fillIsTitleVisible)
    } else {
      resetFilledTitle()
      window.removeEventListener('scroll', fillIsTitleVisible)
    }
  }

  useEffect(() => {
    if (isMobileVersion()) {
      fillIsTitleVisible()
    }

    controlScrollListener()
    window.addEventListener('resize', controlScrollListener)

    return () => {
      window.removeEventListener('resize', controlScrollListener)
      window.removeEventListener('scroll', fillIsTitleVisible)
    }
  }, [])

  return (
    <div className={cn(styles.titleWithLine, 'titleWithLine')} ref={titleRef}>
      <h2>{title}</h2>
    </div>
  )
}

export default TitleWithLine