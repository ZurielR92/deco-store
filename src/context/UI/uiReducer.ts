import { UIState } from "./UIProvider"

type UIActionTipe =
   | { type: 'UI - Show Search' }
   | { type: 'UI - Hide Search' }

export const uiReducer = (state: UIState, action: UIActionTipe): UIState => {

   switch (action.type) {
      case 'UI - Show Search':
         return {
            ...state,
            isShowSearch: true
         }
      case 'UI - Hide Search':
         return {
            ...state,
            isShowSearch: false
         }

      default:
         return state
   }

}