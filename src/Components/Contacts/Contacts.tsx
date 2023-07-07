import styles from './Contact.module.scss'
import { FaLinkedin, FaPhone, FaMailBulk, FaCity } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { ContactItemProps, ContactTypes } from './Contact.props'

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  contact_value,
  link,
  type,
}: ContactItemProps) => {
  const Icon = icon as IconType
  const IconColor = '#008CFF'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (type === ContactTypes.CITY || type === ContactTypes.LINKEDIN) {
      e.preventDefault()
      window.open(link, '_blank', 'noopener noreferrer')
    }
  }

  const handleHref = (type: ContactTypes) => {
    switch (type) {
      case ContactTypes.PHONE:
        return `tel:${contact_value}`
      case ContactTypes.MAIL:
        return `mailto:${contact_value}`
      default:
        return '#'
    }
  }

  return (
    <div className={styles.item}>
      <div className={styles.contactValue}>
        <a href={handleHref(type)} onClick={handleClick}>
          <div className={styles.icon}>
            <Icon size={20} color={IconColor} />
          </div>
          <span>{contact_value}</span>
        </a>
      </div>
    </div>
  )
}

const Contacts: React.FC = () => {
  const contactItems = [
    {
      icon: FaPhone,
      contact_value: '+380688361734',
      type: ContactTypes.PHONE
    },
    {
      icon: FaMailBulk,
      contact_value: 'antonskoromniy@gmail.com',
      type: ContactTypes.MAIL
    },
    {
      icon: FaLinkedin,
      contact_value: 'My linkedin',
      link: 'https://www.linkedin.com/in/anton-skoromniy-33684b1b7/',
      type: ContactTypes.LINKEDIN
    },
    {
      icon: FaCity,
      contact_value: 'Kiyv, Ukraine',
      link: 'https://goo.gl/maps/REQDnT4KJhNkiXoz8',
      type: ContactTypes.CITY
    }
  ];
  return (
    <div className={styles.contacts}>
      {contactItems.map((item, index) => (
        <ContactItem key={index} {...item} />
      ))}
    </div>
  )
}

export default Contacts
