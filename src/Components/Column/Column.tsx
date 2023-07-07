import styles from './Column.module.scss'
import Emergence from '../Emergence/Emergence'
import Summary from '../Summary/Summary'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Languages from '../Languages/Languages'
import Cube from '../Ui/Cube/Cube'
import useWindowDimensions from '../../Hooks/UseWindowDimensions'

const Column = (): JSX.Element => {
  const { isMobile } = useWindowDimensions()

  return (
    <div className={styles.column}>
      <div>
        <Emergence direction={'top'} threshold={0.2}>
          <Summary />
        </Emergence>
        {isMobile && <Skills />} {/* Change the order of the components */}
        <Experience />
      </div>
      <div>
        {!isMobile && <Skills />} {/* Change the order of the components */}
        <Languages />
        <Cube />
      </div>
    </div>
  )
}

export default Column
