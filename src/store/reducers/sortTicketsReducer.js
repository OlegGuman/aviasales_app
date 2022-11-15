const initialState = [
  { id: 'cheap', active: true },
  { id: 'fast', active: false },
  { id: 'optimal', active: false },
]

const sortTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT_CHEAP':
      return state.map((item) => {
        if (item.id === 'cheap') {
          return Object.assign({}, item, { active: true })
        }
        return Object.assign({}, item, { active: false })
      })
    case 'SORT_FAST':
      return state.map((item) => {
        if (item.id === 'fast') {
          return Object.assign({}, item, { active: true })
        }
        return Object.assign({}, item, { active: false })
      })
    case 'SORT_OPTIMAL':
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

export default sortTicketsReducer
