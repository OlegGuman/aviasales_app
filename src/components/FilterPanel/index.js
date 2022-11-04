import { CheckBox } from '../router'

import styles from './filterPanel.module.scss'

const filterData = [
  { id: 'all', lableFor: 'all', title: 'Все' },
  { id: 'non-stop', lableFor: 'non-stop', title: 'Без пересадок' },
  { id: 'transfer-1', lableFor: 'transfer-1', title: '1 пересадка' },
  { id: 'transfer-2', lableFor: 'transfer-2', title: '2 пересадка' },
  { id: 'transfer-3', lableFor: 'transfer-3', title: '3 пересадка' },
]

export function FilterPanel() {
  const elements = filterData.map((item) => {
    return (
      <li key={item.id}>
        <CheckBox id={item.id} />
        <label className={styles.filter_label} htmlFor={item.lableFor}>
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
