import { combineReducers } from 'redux'

import checkboxReducer from './checkboxReducer'
import statusTabsReducer from './statusTabsReducer'
import ticketsReducer from './ticketsReducer'

const rootReducer = combineReducers({
  ticketsData: ticketsReducer,
  checkboxState: checkboxReducer,
  tabsState: statusTabsReducer,
})
export default rootReducer
