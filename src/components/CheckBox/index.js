import { useDispatch } from 'react-redux'

import {
  addStateAllStops,
  addStateNoStops,
  addStateStopsOne,
  addStateStopsTwo,
  addStateStopsThree,
  filterAllStops,
  filterNoStops,
  filterStopsOne,
  filterStopsTwo,
  filterStopsThree,
} from '../../redux/actions/actionCreators'

import styles from './checkbox.module.scss'

export function CheckBox(props) {
  const { id, checked } = props
  const dispatch = useDispatch()

  const duoDispatch = (func1, func2, id, isChecked) => {
    return (dispatch, getState) => {
      dispatch(func1())
      dispatch(func2({ id: id, isChecked: isChecked, isAllChecked: getState().checkboxState[0] }))
    }
  }

  function handlerClick({ target: { id, checked } }) {
    switch (id) {
      case 'all':
        return dispatch(duoDispatch(addStateAllStops, filterAllStops, id, checked))
      case 'non-stop':
        return dispatch(duoDispatch(addStateNoStops, filterNoStops, id, checked))
      case 'transfer-1':
        return dispatch(duoDispatch(addStateStopsOne, filterStopsOne, id, checked))
      case 'transfer-2':
        return dispatch(duoDispatch(addStateStopsTwo, filterStopsTwo, id, checked))
      case 'transfer-3':
        return dispatch(duoDispatch(addStateStopsThree, filterStopsThree, id, checked))
    }
  }

  return (
    <>
      <input
        onChange={(e) => handlerClick(e)}
        checked={checked}
        id={id}
        className={styles.input_checkbox}
        type="checkbox"
      />
    </>
  )
}
