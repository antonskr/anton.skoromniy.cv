import { IconType } from 'react-icons'

export enum ContactTypes {
  CITY = 'city',
  PHONE = 'phone',
  MAIL = 'mail',
  LINKEDIN = 'linkedin',
}

export interface ContactItemProps {
  icon?: IconType
  contact_value: string
  link?: string
  type: ContactTypes
}
