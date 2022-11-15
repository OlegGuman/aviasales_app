import { useSelector } from 'react-redux'

import { CheckBox } from '../router'

import styles from './filterPanel.module.scss'

let filterData = [
  { id: 'all', labelFor: 'all', title: 'Все' },
  { id: 'non-stop', labelFor: 'non-stop', title: 'Без пересадок' },
  { id: 'transfer-1', labelFor: 'transfer-1', title: '1 пересадка' },
  { id: 'transfer-2', labelFor: 'transfer-2', title: '2 пересадка' },
  { id: 'transfer-3', labelFor: 'transfer-3', title: '3 пересадка' },
]

export function FilterPanel() {
  const filterTicketsState = useSelector((state) => state.transferFilter)

  console.log(filterTicketsState)
  const checkedState = (id) => {
    let status
    filterTicketsState.forEach((el) => {
      if (el.id === id) {
        status = el.checked
      }
    })
    // checkedStatus.checkboxAll.forEach((el) => {
    //   if (el.id === id) {
    //     status = el.checked
    //   }
    // })
    return status
  }

  const elements = filterData.map((item) => {
    return (
      <li key={item.id}>
        <CheckBox id={item.id} checked={checkedState(item.id)} />
        <label className={styles.filter_label} htmlFor={item.labelFor}>
          <span>{item.title}</span>
        </label>
      </li>
    )
  })

  return (
    <div className={styles.filter_wrapper}>
      <h2 className={styles.filter_title}>количество пересадок</h2>
      <div className={styles.checkbox_wrapper}>
        <ul>{elements}</ul>
      </div>
    </div>
  )
}
