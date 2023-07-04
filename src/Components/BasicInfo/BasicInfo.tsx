import styles from './Basickinfo.module.scss'
import Contacts from '../Contacts/Contacts'
import MyPhoto from '../Ui/MyPhoto/MyPhoto'
import cn from 'classnames'

const BasicInfo = (): JSX.Element => {
  return (
    <div className={cn(styles.basicInfo, 'wrapper')}>
      <div className={styles.basic}>
        <h1 className={styles.fullName}>Anton skoromniy</h1>
        <p className={cn('blue', styles.description)}>Middle Front End Developer</p>
        <Contacts />
      </div>
      <MyPhoto />
    </div>
  )
}

export default BasicInfo
