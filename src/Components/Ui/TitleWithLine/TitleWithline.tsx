import React, { useEffect, useRef } from 'react'
import styles from './TitleWithLine.module.scss'
import cn from 'classnames'
import { elementVisibilityCheck } from '../../../Helper'

interface titleWithLineProps {
  title: string
}

const TitleWithLine = ({ title }: titleWithLineProps): JSX.Element => {
  const titleRef = useRef<HTMLDivElement>(null)

  const fillIsTitleVisible = () => {
    if (!titleRef.current) {
      return
    }
    const isVisible = elementVisibilityCheck(titleRef.current, 1)

    if (isVisible) {
      titleRef.current.classList.add(styles.titleWithLine_visible)
    } else {
      titleRef.current.classList.remove(styles.titleWithLine_visible)
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
