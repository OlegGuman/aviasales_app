import { SORT_STATUS_CHEAP, SORT_STATUS_FAST, SORT_STATUS_OPTIMAL } from '../actions/actionsType'

const initialState = [
  { id: 'cheap', active: true },
  { id: 'fast', active: false },
  { id: 'optimal', active: false },
]

const statusTabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_STATUS_CHEAP:
      return state.map((item) => {
        if (item.id === 'cheap') {
          return Object.assign({}, item, { active: true })
        }
        return Object.assign({}, item, { active: false })
      })
    case SORT_STATUS_FAST:
      return state.map((item) => {
        if (item.id === 'fast') {
          return Object.assign({}, item, { active: true })
        }
        return Object.assign({}, item, { active: false })
      })
    case SORT_STATUS_OPTIMAL:
      return state.map((item) => {
        if (item.id === 'optimal') {
          return Object.assign({}, item, { active: true })
        }
        return Object.assign({}, item, { active: false })
      })
    default:
      return state
  }
}

export default statusTabsReducer
