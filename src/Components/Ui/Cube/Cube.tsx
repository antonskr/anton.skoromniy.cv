import styles from './Cube.module.scss'
import cn from 'classnames'
import { useEffect, useRef, useState, TouchEvent, MouseEvent } from 'react'
import Emergence from '../../Emergence/Emergence'
import { ICubeFaces, IDirections } from './Cube.props'

const Cube = () => {
  const [isVisible, setIsVisible] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isMouseOnCube = useRef(false)
  const cubeRef = useRef<HTMLDivElement>(null)
  const innerCubeRef = useRef<HTMLDivElement>(null)

  const directions: IDirections = {
    front: [0, 0],
    right: [0, -90],
    back: [0, -180],
    left: [0, 90],
    top: [-90, 0],
    bottom: [90, 0],
  }

  const getCubeCoord = (event: MouseEvent | TouchEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    if ((event as TouchEvent).touches) {
      const touchEvent = event as TouchEvent
      return {
        x: ((touchEvent.touches[0].clientX - rect.left) / (rect.right - rect.left)) * 100 - 50,
        y: ((touchEvent.touches[0].clientY - rect.top) / (rect.bottom - rect.top)) * 100 - 50,
      }
    } else {
      const mouseEvent = event as MouseEvent
      return {
        x: ((mouseEvent.clientX - rect.left) / (rect.right - rect.left)) * 100 - 50,
        y: ((mouseEvent.clientY - rect.top) / (rect.bottom - rect.top)) * 100 - 50,
      }
    }
  }

  const cubRotation = (event: React.MouseEvent | TouchEvent<HTMLDivElement>) => {
    isMouseOnCube.current = true
    const { x, y } = getCubeCoord(event)
    cubeRef.current?.style.setProperty('--cubeYRotate', x + 'deg')
    cubeRef.current?.style.setProperty('--cubeXRotate', y + 'deg')

    innerCubeRef.current?.style.setProperty('--cubeYRotate', x + 'deg')
    innerCubeRef.current?.style.setProperty('--cubeXRotate', y * -1 + 'deg')
  }

  const getRandomDirection = (directions: IDirections) => {
    const keys = Object.keys(directions)
    return directions[keys[Math.floor(Math.random() * keys.length)]]
  }

  const changeCubDirection = (current_direction?: [number, number]) => {
    if (isMouseOnCube.current) {
      return
    }

    const direction = current_direction || getRandomDirection(directions)
    cubeRef.current?.style.setProperty('--cubeXRotate', direction[0] + 'deg')
    cubeRef.current?.style.setProperty('--cubeYRotate', direction[1] + 'deg')

    innerCubeRef.current?.style.setProperty('--cubeXRotate', direction[0] + 'deg')
    innerCubeRef.current?.style.setProperty('--cubeYRotate', direction[1] + 'deg')
  }

  const frezeAutoRotation = () => {
    isMouseOnCube.current = true
  }

  const unfrezeAutoRotation = () => {
    setTimeout(() => {
      isMouseOnCube.current = false
    }, 1000)
  }

  useEffect(() => {
    if (isVisible) {
      changeCubDirection(directions.top)
      setTimeout(() => {
        intervalRef.current = setInterval(changeCubDirection, 3000)
      }, 800)
    }

    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isVisible])

  const CubeFaces = ({ ...props }: ICubeFaces): JSX.Element => {
    return (
      <>
        <div className={cn(styles.cube__face, styles.cube__face_front)}>{props.front_name}</div>
        <div className={cn(styles.cube__face, styles.cube__face_back)}>{props.back_name}</div>
        <div className={cn(styles.cube__face, styles.cube__face_right)}>{props.right_name}</div>
        <div className={cn(styles.cube__face, styles.cube__face_left)}>{props.left_name}</div>
        <div className={cn(styles.cube__face, styles.cube__face_top)}>{props.top_name}</div>
        <div className={cn(styles.cube__face, styles.cube__face_bottom)}>{props.back_name}</div>
      </>
    )
  }

  return (
    <Emergence callbackFn={setIsVisible}>
      <div className={styles.scene}>
        <div
          className={styles.cube}
          onMouseMove={cubRotation}
          onTouchMove={cubRotation}
          onMouseEnter={frezeAutoRotation}
          onMouseLeave={unfrezeAutoRotation}
          onTouchStart={frezeAutoRotation}
          onTouchEnd={unfrezeAutoRotation}
          ref={cubeRef}
        >
          <CubeFaces
            front_name='Frontend'
            back_name='Backend'
            right_name='JavaScript'
            left_name='CSS'
            top_name='HTML'
            bottom_name='React'
          />
          <div className={styles.innerCubeWrapper}>
            <div className={cn(styles.cube, styles.cube__innerCube)} ref={innerCubeRef}>
              <CubeFaces
                front_name='TypeScript'
                back_name='SCSS'
                right_name='GSAP'
                left_name='NestJS'
                top_name='Redux'
                bottom_name='NextJS'
              />
            </div>
          </div>
        </div>
      </div>
    </Emergence>
  )
}

export default Cube
