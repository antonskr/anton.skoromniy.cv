import React from "react";
import styles from './Basickinfo.module.scss';
import Contacts from "../Contacts/Contacts";

const BasicInfo = ():JSX.Element => {
    return (
        <div className={`wrapper ${styles.basicInfo}`}>
            <div className={styles.basic}>
                <h1 className={styles.fullName}>
                    Anton skoromniy
                </h1>
                <p className={`blue ${styles.description}`}>
                    Middle Front End Developer
                </p>
                <Contacts />
            </div>
        </div>
    )
}

export default BasicInfo;