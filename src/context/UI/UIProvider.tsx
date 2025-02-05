'use client'

import { FC, ReactNode, useReducer } from 'react'
import { uiReducer } from './uiReducer'
import UIContext from './UIContext'

interface Props {
    children: ReactNode
}

export interface UIState {
   isShowSearch: boolean
}

const UI_INITIAL_STATE: UIState = {
   isShowSearch: false,
}
const UIProvider:FC<Props> = ( { children } ) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const showSearch = () => {
        dispatch({ type: 'UI - Show Search' })
        document.body.classList.add('no-overflow')
      }
      
      const hideSearch = () => {
         dispatch({ type: 'UI - Hide Search' })
         document.body.classList.remove('no-overflow')
    }


   return (
      <UIContext.Provider value={{
         ...state,
         //Methods
         showSearch,
         hideSearch,
      }}>
         { children }
      </UIContext.Provider>
   )
}

export default UIProvider