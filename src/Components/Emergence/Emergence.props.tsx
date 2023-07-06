import { ReactNode } from 'react'

interface EmergenceProps {
  children: ReactNode
  callbackFn?: (boolean: boolean) => void
  direction?: 'top' | 'right' | 'bottom' | 'left'
  threshold?: number
}

export default EmergenceProps
