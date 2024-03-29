import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <div className={'container'}>{children}</div>
}

export default Layout
