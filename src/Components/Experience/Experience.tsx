import styles from './Experience.module.scss'
import TitleWithLine from "../Ui/TitleWithLine/TitleWithline";
import {FaCalendarAlt, FaCity} from 'react-icons/fa';



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
                position='Front End Developer'
                companyName='ZAGROZA digital agency'
                date_from='04/2021'
                date_to='05/2021'
                location_name='Kharkiv, Ukraine'
                location_link='/'
                description={`Developed the websites: <a href='/'>WDE3D</a>, <a href='/'>Zagroza-agency</a> and others projects.`}
                technologies='<span>Tehcnolgies used:</span> React, NextJS, Headless CMS Directus, Node.js.'
                activity={['adsasdasd', 'sadasdsad', 'sadsadas']}
            />
            <ExperienceCard
                position='Front End Developer'
                companyName='ZAGROZA digital agency'
                date_from='04/2021'
                date_to='05/2021'
                location_name='Kharkiv, Ukraine'
                location_link='/'
                description={`Developed the websites: <a href='/'>WDE3D</a>, <a href='/'>Zagroza-agency</a> and others projects.`}
                technologies='<span>Tehcnolgies used:</span> React, NextJS, Headless CMS Directus, Node.js.'
                activity={['adsasdasd', 'sadasdsad', 'sadsadas']}
            />
            <ExperienceCard
                position='Front End Developer'
                companyName='ZAGROZA digital agency'
                date_from='04/2021'
                date_to='05/2021'
                location_name='Kharkiv, Ukraine'
                location_link='/'
                description={`Developed the websites: <a href='/'>WDE3D</a>, <a href='/'>Zagroza-agency</a> and others projects.`}
                technologies='<span>Tehcnolgies used:</span> React, NextJS, Headless CMS Directus, Node.js.'
                activity={['adsasdasd', 'sadasdsad', 'sadsadas']}
            />
        </div>
    )
}

export default Experience;
