import React from 'react'
import styles from './Contact.module.scss'

import { FaLinkedin, FaPhone, FaMailBulk, FaCity } from 'react-icons/fa'

import { IconType } from 'react-icons'

enum contactTypes {
  CITY = 'city',
  PHONE = 'phone',
  MAIL = 'mail',
  LINKEDIN = 'linkedin',
}

interface itemI {
  icon?: IconType
  contact_value: string
  link?: string
  type: contactTypes
}

const ContactItem = ({ icon, contact_value, link, type }: itemI): JSX.Element => {
  const Icon = icon as IconType
  const IconColor = '#008CFF'

  return (
    <div className={styles.item}>
      <div className={styles.contactValue}>
        {(type === 'city' || type === 'linkedin') && (
          <a href={link} target={'_blank'} rel={'noopener noreferrer'}>
            <div className={styles.icon}>
              <Icon size={20} color={IconColor} />
            </div>
            <span>{contact_value}</span>
          </a>
        )}
        {type === 'phone' && (
          <a href={`tel:${contact_value}`}>
            <div className={styles.icon}>
              <Icon size={20} color={IconColor} />
            </div>
            <span>{contact_value}</span>
          </a>
        )}
        {type === 'mail' && (
          <a href={`mailto:${contact_value}`}>
            <div className={styles.icon}>
              <Icon size={20} color={IconColor} />
            </div>
            <span>{contact_value}</span>
          </a>
        )}
      </div>
    </div>
  )
}

const Contacts = (): JSX.Element => {
  return (
    <div className={styles.contacts}>
      <ContactItem icon={FaPhone} contact_value={'+380688361734'} type={contactTypes.PHONE} />
      <ContactItem
        icon={FaMailBulk}
        contact_value={'antonskoromniy@gmail.com'}
        type={contactTypes.MAIL}
      />
      <ContactItem
        icon={FaLinkedin}
        contact_value={'My linkedin'}
        link={'https://www.linkedin.com/in/anton-skoromniy-33684b1b7/'}
        type={contactTypes.LINKEDIN}
      />
      <ContactItem
        icon={FaCity}
        contact_value={'Kiyv, Ukraine'}
        link={'https://goo.gl/maps/REQDnT4KJhNkiXoz8'}
        type={contactTypes.CITY}
      />
    </div>
  )
}

export default Contacts
