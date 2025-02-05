'use client'
import { FC, ReactNode, useEffect } from 'react';
import { UIProvider } from '.';


interface Props {
    children: ReactNode
}

const ContextsProvider:FC<Props> = ({children}) => {


    

    return (
        <UIProvider>
                {children}
        </UIProvider>
    )
}



export default ContextsProvider