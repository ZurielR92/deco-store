'use client'
import { createContext } from 'react'


interface ContextProps {
   isShowSearch: boolean

   //Methods
   showSearch: () => void
   hideSearch: () => void
}


const UIContext = createContext( {} as ContextProps )

export default UIContext