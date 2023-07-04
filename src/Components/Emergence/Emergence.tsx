import styles from './Emergence.module.scss'
import EmergenceProps from './Emergence.props'
import cn from 'classnames'
import { useEffect, useRef } from 'react'
import { elementVisibilityCheck } from '../../Helper'

const Emergence = ({ children, ...props }: EmergenceProps): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const emergenceIfVisible = () => {
    if (!wrapperRef.current) {
      return
    }
    const isVisible = elementVisibilityCheck(wrapperRef.current, props.threshold)
    if (isVisible) {
      if (typeof props.callbackFn === 'function') {
        props.callbackFn(true)
      }
      wrapperRef.current.classList.add(styles.visible)
      window.removeEventListener('scroll', emergenceIfVisible)
    }
  }

  useEffect(() => {
    emergenceIfVisible()

    window.addEventListener('scroll', emergenceIfVisible)

    return () => window.removeEventListener('scroll', emergenceIfVisible)
  }, [])

  return (
    <div className={cn(styles.wrapper, styles[props.direction])} ref={wrapperRef}>
      {children}
    </div>
  )
}

Emergence.defaultProps = {
  direction: 'top',
  threshold: 1,
}

export default Emergence