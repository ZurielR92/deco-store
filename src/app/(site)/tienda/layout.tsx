import { FC, ReactNode, Suspense } from "react";


interface Props {
    children: ReactNode
}

const TiendaLayout:FC<Props> = ({ children }) => {
    return (
        <>
        {children}
        </>
    )
}

export default TiendaLayout