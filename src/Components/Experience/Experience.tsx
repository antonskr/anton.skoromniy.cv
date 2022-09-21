import styles from './Experience.module.scss'
import TitleWithLine from "../Ui/TitleWithLine/TitleWithline";
import { FaCalendarAlt, FaCity } from 'react-icons/fa';
import OuterLink from "../OuterLink/OuterLink";

interface IExperienceCardProps {
    position: string,
    companyName: string,
    date_from: string,
    date_to: string,
    location_name: string,
    location_link: string,
    description: string,
    technologies: string,
    activity: string[]
}

const ExperienceCard = ({...props}: IExperienceCardProps): JSX.Element => {
    return (
        <div className={styles.card}>
            <div className={styles.card__position}>
                {props.position}
            </div>
            <div className={styles.card__companyName}>
                {props.companyName}
            </div>
            <div className={styles.card__dateAndLocation}>
                <div className={styles.dateAndLocation__date}>
                    <div className={styles.dateAndLocation__date__dateIcon}>
                        <FaCalendarAlt size={14} />
                    </div>
                    <span className={styles.dateAndLocation__date__from}>{props.date_from}</span>
                    {' - '}
                    <span className={styles.dateAndLocation__date__to}>{props.date_to}</span>
                </div>
                <div className={styles.dateAndLocation__location}>
                    <a className={styles.dateAndLocation__location__link} href={props.location_link}>
                        <div className={styles.dateAndLocation__location__link__locationIcon}>
                            <FaCity size={14} />
                        </div>
                        {props.location_name}
                    </a>
                </div>
            </div>
            <div className={styles.card__description} dangerouslySetInnerHTML={{__html: props.description}} />
            <div className={styles.card__technologies}  dangerouslySetInnerHTML={{__html: props.technologies}} />
            <div className={styles.card__activity}>
                {
                    props.activity.map(_el => {
                        return <div key={_el}>{_el}</div>
                    })
                }
            </div>
        </div>
    )
}



const Experience = (): JSX.Element => {
    return (
        <div className={styles.experience}>
            <TitleWithLine title='Experience'/>
            <ExperienceCard
                position=' Middle Front End Developer'
                companyName='ZAGROZA digital agency'
                date_from='03/2022'
                date_to='09/2022'
                location_name='Kharkiv, Ukraine'
                location_link='/'
                description={`Developed the frontend for a volunteer platform - <a href='https://volunteering-ukraine.com' target='_blank' rel='noreferrer'>volunteering-ukraine</a>, <a href='https://milibris.dev.webvision360.com' target='_blank' rel='noreferrer'>Milibris</a> - Website for a company that improves digital publishing and implements distribution solutions.`}
                technologies='<span>Tehcnolgies used:</span> React, NextJS, Headless CMS Directus, Node.js.'
                activity={['Developed front end', 'Created the mobile version', 'Suggested ideas that have been implemented']}
            />
            <ExperienceCard
                position='Junior Front End Developer'
                companyName='ZAGROZA digital agency'
                date_from='07/2021'
                date_to='03/2022'
                location_name='Kharkiv, Ukraine'
                location_link='/'
                description={`Developed the websites: <a href='https://wde3d.com' target='_blank' rel='noreferrer'>WDE3D</a>, <a href='https://zagroza.agency' target='_blank' rel='noreferrer'>Zagroza-agency</a> and others projects.`}
                technologies='<span>Tehcnolgies used:</span> React, NextJS, Headless CMS Directus, Node.js, Docker, SASS.'
                activity={['Created complex animations', 'Developed front end and some backend', 'Sending and validating files on server']}
            />
            <ExperienceCard
                position='Trainee Front End Developer'
                companyName='ZAGROZA digital agency'
                date_from='04/2021'
                date_to='07/2021'
                location_name='Kharkiv, Ukraine'
                location_link='/'
                description={`Participated in the development of the <a href='https://promius.com.ua' target='_blank' rel='noreferrer'>Promius</a> website.`}
                technologies='<span>Tehcnolgies used:</span> React, NextJS.'
                activity={['Developed UI components for an existing project.']}
            />
        </div>
    )
}

export default Experience;
