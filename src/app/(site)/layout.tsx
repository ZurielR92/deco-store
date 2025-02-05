'use client'
import { FC, ReactNode, Suspense, useContext, useEffect } from "react";
import { SiteHeader } from "./components/SiteHeader";
import { MenuMobile } from "./components/MenuMobile";
import { SearchModal } from "./components/SearchModal";
import { UIContext } from "@/context";

interface Props {
    children: ReactNode
}


const SiteLayout:FC<Props> = ({children}) => {

    const { showSearch } = useContext(UIContext)

    useEffect(()=>{
        document.getElementById('btnSearchMobile')?.addEventListener('click', showSearch)
    },[showSearch])
    return (
        <>
        <Suspense>
            <SiteHeader/>
        </Suspense>
        <MenuMobile/>
        <SearchModal/>
        {children}
        </>
    )
}

export default SiteLayout;