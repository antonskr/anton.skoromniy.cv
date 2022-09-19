import styles from './Column.module.scss';
import Summary from "../Components/Summary/Summary";
import Skills from "../Components/Skills/Skills";


const Column = (): JSX.Element => {
    return (
        <div className={styles.column}>
            <div>
                <Summary/>
            </div>
            <div>
                <Skills/>
            </div>
        </div>
    )
}

export default Column;
