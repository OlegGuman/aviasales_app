import { legacy_createStore as createStore } from 'redux'

//import reducers from './reducers/transferReducer'

import rootReducer from './reducers/rootReducer'

let store = createStore(rootReducer)
export default store
