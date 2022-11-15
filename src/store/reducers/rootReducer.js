import { combineReducers } from 'redux'

import transferReducer from './transferReducer'
import sortTicketsReducer from './sortTicketsReducer'

const rootReducer = combineReducers({
  transferFilter: transferReducer,
  sortTickets: sortTicketsReducer,
})
export default rootReducer
