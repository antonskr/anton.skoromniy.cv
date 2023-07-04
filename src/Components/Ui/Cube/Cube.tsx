import styles from './Cube.module.scss'
import cn from 'classnames'
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import Emergence from '../../Emergence/Emergence'

interface IDirections {
  [key: string]: any

  front: [number, number]
  right: [number, number]
  back: [number, number]
  left: [number, number]
  top: [number, number]
  bottom: [number, number]
}

const Cube = () => {
  const [isVisible, setIsVisible] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isMouseOnCube = useRef(false)
  const cubeRef = useRef<HTMLDivElement>(null)
  const directions: IDirections = {
    front: [0, 0],
    right: [0, -90],
    back: [0, -180],
    left: [0, 90],
    top: [-90, 0],
    bottom: [90, 0],
  }

  /*  const getCubeX = (event: React.MouseEvent) => {
        const rect = event.currentTarget.getBoundingClientRect();
        return event.clientX - rect.left + 20 // x position within the element.
    }

    const cubRotation = (event: React.MouseEvent) => {
        isMouseOnCube.current = true;
        cubeRef.current?.style.setProperty('--cubeYRotate', getCubeX(event) + "deg");
    }

    const normalize = () => {
        setTimeout(() => {
            cubeRef.current?.style.setProperty('--cubeYRotate', 0 + "deg");
            isMouseOnCube.current = false;
        }, 2000);
    }*/

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

  return (
    <Emergence callbackFn={setIsVisible}>
      <div className={styles.scene}>
        <div
          className={styles.cube}
          /* onMouseMove={cubRotation}
                    onTouchEnd={normalize}
                    onMouseLeave={normalize}*/
          ref={cubeRef}
        >
          <div className={cn(styles.cube__face, styles.cube__face_front)}>Frontend</div>
          <div className={cn(styles.cube__face, styles.cube__face_back)}>Backend</div>
          <div className={cn(styles.cube__face, styles.cube__face_right)}>JavaScript</div>
          <div className={cn(styles.cube__face, styles.cube__face_left)}>CSS</div>
          <div className={cn(styles.cube__face, styles.cube__face_top)}>HTMl</div>
          <div className={cn(styles.cube__face, styles.cube__face_bottom)}>React</div>
        </div>
      </div>
    </Emergence>
  )
}

export default Cube
