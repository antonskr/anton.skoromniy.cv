import styles from './Experience.module.scss'
import TitleWithLine from '../Ui/TitleWithLine/TitleWithline'
import Emergence from '../Emergence/Emergence'
import { FaCalendarAlt, FaCity } from 'react-icons/fa'
import { IExperienceCardProps } from './Experience.props'

const ExperienceCard = ({ ...props }: IExperienceCardProps): JSX.Element => {
  return (
    <Emergence direction={'top'} threshold={props.threshold}>
      <div className={styles.card}>
        <div className={styles.card__position}>{props.position}</div>
        <div className={styles.card__companyName}>{props.companyName}</div>
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
        <div
          className={styles.card__description}
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
        <div
          className={styles.card__technologies}
          dangerouslySetInnerHTML={{ __html: props.technologies }}
        />
        <div className={styles.card__activity}>
          {props.activity.map((_el) => {
            return <div key={_el}>{_el}</div>
          })}
        </div>
      </div>
    </Emergence>
  )
}

const Experience = (): JSX.Element => {
  return (
    <div className={styles.experience}>
      <Emergence>
        <TitleWithLine title='Experience' />
      </Emergence>
      <ExperienceCard
        threshold={0.5}
        position=' Middle Front End Developer'
        companyName='Lynksen'
        date_from='10/2022'
        date_to='06/2023'
        location_name='Kiyv, Ukraine (Remote)'
        location_link='/'
        description={`
            Among the many tasks I have performed in this position are:<br/>
            As a member of a 15-person team, I provided end-to-end solutions for all three projects. For NFEST, I worked on app's user interface using React, NextJs, GSAP, and implemented dƒifferent features.
            For Brandflow, I developed a full calendar for dynamic data retrieval and implemented API functionality to track advertising metrics from Facebook and Google.
            For Illuspark, I implemented a real-time chat feature using WebSockets technology,
            i also worked closely with the backend team to integration with the platform's database
            <br/><br/>
            <span>Projects:</span> <br/>
                - <a href='https://nfest.io/' target='_blank' rel='noreferrer'>NFEST</a>: event management application<br/>
                - <a href='https://beta.app.brandflow.co/' target='_blank' rel='noreferrer'>Brandflow</a>: a SaaS platform for managing and tracking digital ad campaigns<br/>
                - <a href='https://illuspark.com/' target='_blank' rel='noreferrer'>Illuspark</a>: a social media platform for artists and designers<br/><br/>
        `}
        technologies='<span>Tehcnolgies used:</span> React, NextJS, NestJs, Strapi, Websokets, GSAP<br/>'
        activity={[
          'Worked with the team of 15 members and provided end-to-end solutions',
          'Implemented API solutions, and worked closely with backend developers',
          'Supporting existing projects',
          'Developed UI components for an existing project',
          'Developed front end part',
          'Created the mobile versions',
          'Participated in development of SaaS platform',
          'Developed a full calendar for dynamic data retrieval (Brandflow)',
          'Develop frontend part and implementation of API functionality, to implement advertising metrics, (Facebook, Google) for SaaS platform (Brandflow)',
          'Implemented a chat with websockets technology, for Illuspark project',
        ]}
      />
      <ExperienceCard
        position='Junior Front End Developer'
        companyName='ZAGROZA digital agency'
        date_from='07/2021'
        date_to='03/2022'
        location_name='Kharkiv, Ukraine'
        location_link='/'
        description={
          'Developed the websites: <a href=\'https://wde3d.com\' target=\'_blank\' rel=\'noreferrer\'>WDE3D</a>, <a href=\'https://zagroza.agency\' target=\'_blank\' rel=\'noreferrer\'>Zagroza-agency</a> and others projects.'
        }
        technologies='<span>Tehcnolgies used:</span> React, NextJS, Headless CMS Directus, Node.js, Docker, SASS.'
        activity={[
          'Created complex animations',
          'Developed front end and some backend',
          'Sending and validating files on server',
        ]}
      />
      <ExperienceCard
        position='Trainee Front End Developer'
        companyName='ZAGROZA digital agency'
        date_from='04/2021'
        date_to='07/2021'
        location_name='Kharkiv, Ukraine'
        location_link='/'
        description={
          'Participated in the development of the <a href=\'https://promius.com.ua\' target=\'_blank\' rel=\'noreferrer\'>Promius</a> website.'
        }
        technologies='<span>Tehcnolgies used:</span> React, NextJS.'
        activity={['Developed UI components for an existing project.']}
      />
    </div>
  )
}

export default Experience
