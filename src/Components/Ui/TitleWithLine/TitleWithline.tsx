import React from 'react';
import styles from './TitleWithLine.module.scss';
import cn from 'classnames';

interface titleWithLineProps {
    title: string
}

const TitleWithLine = ({title}: titleWithLineProps):JSX.Element => {
    return (
        <div className={cn(styles.titleWithLine, 'titleWithLine')}>
            <h2>{ title }</h2>
        </div>
    )
}

export default TitleWithLine;
