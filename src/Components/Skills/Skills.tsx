import styles from './Skills.module.scss';
import TitleWithLine from "../Ui/TitleWithLine/TitleWithline";
import Emergence from "../Emergence/Emergence";

interface ISkillsCard {
    category: string,
    skills: string[]
}

const SkillCard = ({ category, skills }: ISkillsCard) => {
    return (
        <div className={styles.skillsCard}>
            <Emergence>
                <div className={styles.skillsCard__category}>
                    { category }
                </div>
            </Emergence>
            <Emergence>
                <div className={styles.skillsCard__skills}>
                    {
                        skills.map(_el => {
                            return (
                                <p key={_el}>{_el}</p>
                            )
                        })
                    }
                </div>
            </Emergence>
        </div>
    )
}

const Skills = ():JSX.Element => {
    return (
        <div className={styles.skills}>
            <Emergence>
                <TitleWithLine title='Skills' />
            </Emergence>
            <SkillCard
                category={'CORE'}
                skills={['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SASS', 'GIT', 'Figma', 'REST API', 'DRY', 'KISS']}
            />
            <SkillCard
                category={'Front-end'}
                skills={['NextJS', 'React', 'Redux-toolkit', 'React-Router', 'React-Query', 'Motion', 'GSAP']}
            />
            <SkillCard
                category={'Back-end'}
                skills={['NodeJS', 'NestJS']}
            />
            <SkillCard
                category={'Headless CMS'}
                skills={['Directus', 'Strapi']}
            />
            <SkillCard
                category={'Other'}
                skills={['WebSockets', 'Scrum']}
            />
        </div>
    )
}

export default Skills
