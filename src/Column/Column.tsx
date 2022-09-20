import styles from './Column.module.scss';
import Summary from "../Components/Summary/Summary";
import Skills from "../Components/Skills/Skills";
import Languages from "../Components/Languages/Languages";
import Experience from "../Components/Experience/Experience";


const Column = (): JSX.Element => {
    return (
        <div className={styles.column}>
            <div>
                <Summary />
                <Experience />
            </div>
            <div>
                <Skills />
                <Languages />
            </div>
        </div>
    )
}

export default Column;
