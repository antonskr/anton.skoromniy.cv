import styles from './Skills.module.scss';
import TitleWithLine from "../Ui/TitleWithLine/TitleWithline";

interface ISkillsCard {
    category: string,
    skills: string[]
}


const SkillCard = ({ category, skills }: ISkillsCard) => {
    return (
        <div className={styles.skillsCard}>
            <div className={styles.skillsCard__category}>
                { category }
            </div>
            <div className={styles.skillsCard__skills}>
                {
                    skills.map(_el => {
                        return (
                            <p key={_el}>{_el}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

const Skills = ():JSX.Element => {
    return (
        <div className={styles.skills}>
            <TitleWithLine title='Skills'/>
            <SkillCard
                category={'Client-side'}
                skills={['HTML', 'CSS','SASS', 'JavaScript', 'React', 'NextJs', 'TypeScript']}
            />
            <SkillCard
                category={'Server-side'}
                skills={['Directus', 'NodeJs', 'Websockets']}
            />
            <SkillCard
                category={'Experience in development methodologies'}
                skills={['Scrum', 'Agile', 'Kanban']}
            />
        </div>
    )
}

export default Skills
