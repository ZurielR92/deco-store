import { FC, ReactNode } from "react"
import { HeaderAdmin } from "./components/HeaderAdmin";


interface Props {
    children: ReactNode
}

const DashboardLayout:FC<Props> = ({ children }) => {
    return (
        <>
        {
            children
        }
        </>
    )
}


export default DashboardLayout;
