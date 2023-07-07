import styles from './Skills.module.scss'
import { useCallback, useEffect, useRef, useState } from 'react'
import TitleWithLine from '../Ui/TitleWithLine/TitleWithline'
import Emergence from '../Emergence/Emergence'
import { ISkillsCard } from './Skills.props'
import cn from 'classnames'
import { elementVisibilityCheck } from '../../Helper'

const SkillCard = ({ category, skills }: ISkillsCard) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsCardRef = useRef<HTMLDivElement>(null);

  const toggleSkillsCardVisibility = useCallback((isVisible: boolean) => {
    setIsVisible(isVisible);
  }, []);

  const checkIsVisible = useCallback(() => {
    if (!skillsCardRef.current) return;
    const isSkillsCardVisible = elementVisibilityCheck(skillsCardRef.current, 1);
    if (isSkillsCardVisible) {
      toggleSkillsCardVisibility(true);
    }
  }, [toggleSkillsCardVisibility]);

  useEffect(() => {
    checkIsVisible();
    window.addEventListener('scroll', checkIsVisible);

    return () => window.removeEventListener('scroll', checkIsVisible);
  }, [checkIsVisible]);

  return (
    <div className={styles.skillsCard}>
      <Emergence>
        <div className={styles.skillsCard__category}>{category}</div>
      </Emergence>
      <Emergence>
        <div
          className={cn(styles.skillsCard__skills, {
            [styles.skillsCard__skills__visible]: isVisible,
          })}
          ref={skillsCardRef}
        >
          {skills.map((skill, idx) => {
            return (
              <p
                key={skill}
                className={styles.skillsCard__skills__item}
                style={{
                  transitionDelay: `${idx * 0.1}s`,
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                {skill}
              </p>
            );
          })}
        </div>
      </Emergence>
    </div>
  );
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
