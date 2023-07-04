import styles from './Column.module.scss'
import Emergence from '../Components/Emergence/Emergence'
import Summary from '../Components/Summary/Summary'
import Experience from '../Components/Experience/Experience'
import Skills from '../Components/Skills/Skills'
import Languages from '../Components/Languages/Languages'
import Cube from '../Components/Ui/Cube/Cube'

const Column = (): JSX.Element => {
  return (
    <div className={styles.column}>
      <div>
        <Emergence direction={'top'} threshold={0.2}>
          <Summary />
        </Emergence>
        <Experience />
      </div>
      <div>
        <Skills />
        <Languages />
        <Cube />
      </div>
    </div>
  )
}

export default Column
