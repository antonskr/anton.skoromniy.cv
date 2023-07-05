import styles from './Skills.module.scss'
import TitleWithLine from '../Ui/TitleWithLine/TitleWithline'
import Emergence from '../Emergence/Emergence'
import { ISkillsCard } from './Skills.props'

const SkillCard = ({ category, skills }: ISkillsCard) => {
  return (
    <div className={styles.skillsCard}>
      <Emergence>
        <div className={styles.skillsCard__category}>{category}</div>
      </Emergence>
      <Emergence>
        <div className={styles.skillsCard__skills}>
          {skills.map((skill) => {
            return <p key={skill}>{skill}</p>
          })}
        </div>
      </Emergence>
    </div>
  )
}

const Skills = (): JSX.Element => {
  return (
    <div className={styles.skills}>
      <Emergence>
        <TitleWithLine title='Skills' />
      </Emergence>
      <SkillCard
        category={'CORE'}
        skills={[
          'JavaScript',
          'TypeScript',
          'HTML',
          'CSS',
          'SASS',
          'GIT',
          'REST API',
          'DRY',
          'KISS',
          'Figma',
        ]}
      />
      <SkillCard
        category={'Frontend'}
        skills={[
          'NextJS',
          'React',
          'Redux-toolkit',
          'React-Router',
          'React-Query',
          'Motion',
          'GSAP',
          'WebSockets',
        ]}
      />
      <SkillCard category={'Backend'} skills={['NodeJS', 'NestJs']} />
      <SkillCard category={'Headless CMS'} skills={['Directus', 'Strapi']} />
    </div>
  )
}

export default Skills
