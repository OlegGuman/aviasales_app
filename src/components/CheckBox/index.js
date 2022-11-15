import { useDispatch } from 'react-redux'

import { allStops, noStops, stopsOne, stopsTwo, stopsThree } from '../../actions/actions'

import styles from './checkbox.module.scss'

export function CheckBox(props) {
  const { id, checked } = props
  const dispatch = useDispatch()

  function handlerClick(e) {
    switch (e.target.id) {
      case 'all':
        return dispatch(allStops())
      case 'non-stop':
        return dispatch(noStops())
      case 'transfer-1':
        return dispatch(stopsOne())
      case 'transfer-2':
        return dispatch(stopsTwo())
      case 'transfer-3':
        return dispatch(stopsThree())
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
