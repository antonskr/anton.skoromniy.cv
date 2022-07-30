import React, { ReactNode } from "react";
import '../App.scss';

interface Layout {
    children: ReactNode
}

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <div className={'container'}>
            <div className={'wrapper'}>

            </div>
        </div>
    )
}

export default Layout;
