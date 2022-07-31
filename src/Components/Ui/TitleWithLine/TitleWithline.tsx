import React from 'react';
import styles from './TitleWithLine.module.scss';

interface titleWithLineProps {
    title: string
}

const TitleWithLine = ({title}: titleWithLineProps):JSX.Element => {
    return (
        <div className={styles.titleWithLine}>
            <h2>{ title }</h2>
        </div>
    )
}

export default TitleWithLine;