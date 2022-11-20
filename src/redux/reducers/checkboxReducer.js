import {
  CHECKBOX_STATUS_ALL,
  CHECKBOX_STATUS_NO_STOPS,
  CHECKBOX_STATUS_STOPS_ONE,
  CHECKBOX_STATUS_STOPS_TWO,
  CHECKBOX_STATUS_STOPS_THREE,
} from '../actions/actionsType'

const initialStateFilter = [
  { id: 'all', checked: true },
  { id: 'non-stop', checked: true },
  { id: 'transfer-1', checked: true },
  { id: 'transfer-2', checked: true },
  { id: 'transfer-3', checked: true },
]

function modifiedCheckboxState(newArr, state) {
  let filtersCheck = newArr.filter((item) => item.id !== 'all')
  let checkTrue = filtersCheck.every((item) => item.checked)
  if (checkTrue) {
    return state.map((item) => Object.assign({}, item, { checked: true }))
  } else {
    return newArr.map((item) => (item.id === 'all' ? Object.assign({}, item, { checked: false }) : item))
  }
}

function toggleChecked(item) {
  return Object.assign({}, item, { checked: !item.checked })
}

const transferReducer = (state = initialStateFilter, action) => {
  let isCheck
  let allCheck
  let isFilters
  let isAllCheckbox = state.filter((item) => item.id === 'all')
  let isFilterCheckbox = state.filter((item) => item.id !== 'all')

  switch (action.type) {
    case CHECKBOX_STATUS_ALL:
      allCheck = isAllCheckbox.map((item) => Object.assign({}, item, { checked: !item.checked }))
      if (allCheck[0].checked) {
        isFilters = isFilterCheckbox.map((item) => Object.assign({}, item, { checked: true }))
        return [...allCheck, ...isFilters]
      }
      return state.map((item) => Object.assign({}, item, { checked: false }))
    case CHECKBOX_STATUS_NO_STOPS:
      isCheck = state.map((item) => (item.id === 'non-stop' ? toggleChecked(item) : item))
      return modifiedCheckboxState(isCheck, state)
    case CHECKBOX_STATUS_STOPS_ONE:
      isCheck = state.map((item) => (item.id === 'transfer-1' ? toggleChecked(item) : item))
      return modifiedCheckboxState(isCheck, state)
    case CHECKBOX_STATUS_STOPS_TWO:
      isCheck = state.map((item) => (item.id === 'transfer-2' ? toggleChecked(item) : item))
      return modifiedCheckboxState(isCheck, state)
    case CHECKBOX_STATUS_STOPS_THREE:
      isCheck = state.map((item) => (item.id === 'transfer-3' ? toggleChecked(item) : item))
      return modifiedCheckboxState(isCheck, state)
    default:
      return state
  }
}

export default transferReducer
