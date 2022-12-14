import styles from './Summary.module.scss';
import TitleWithLine from "../Ui/TitleWithLine/TitleWithline";

const Summary = () => {
    return (
        <div className={styles.summary}>
            <TitleWithLine title={'Summary'}/>
            <div className={styles.description}>
                <div>
                    JavaScript React Developer with 1.5 years of experience in JS, React, NextJS,
                    Well-aqcuainted with develop methodologies.
                </div>
                <div>
                    A supporter of soft power. This allows me to be successful in the implementation of my projects.
                    I adhere to the philosophy of constant development: spiritual, aesthetic and professional.
                </div>
            </div>
        </div>
    )
}

export default Summary;
