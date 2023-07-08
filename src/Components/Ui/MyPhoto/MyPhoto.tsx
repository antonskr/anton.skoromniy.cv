import styles from './MyPhoto.module.scss'
import photo from '../../../Images/My_photo.jpg'

const MyPhoto = () => {
  return (
    <>
      <div className={styles.photo}>
        <img src={photo} alt='photo'/>
        <div className={styles.photo__verge}></div>
      </div>

      <svg width={0} height={0}>
        <filter id={'svg_filter'}>
          <feTurbulence baseFrequency={0} numOctaves={1}>
            <animate attributeName={'baseFrequency'} dur={'1s'} values={'0.04;0'} />
          </feTurbulence>
          <feDisplacementMap scale={5} in={'SourceGraphic'} />
        </filter>
      </svg>
    </>
  )
}

export default MyPhoto
