import React from 'react';
import Photo from '../../../images/Myphoto.jpg';
import styles from './MyPhoto.module.scss'

const MyPhoto = () => {
    return (
        <div className={styles.photo}>
            <img src={Photo} alt="photo"/>
        </div>
    )
}

export default MyPhoto;