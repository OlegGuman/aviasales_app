import { Tabs } from 'antd'
import 'antd/dist/antd.min.css'
import { useDispatch, useSelector } from 'react-redux'

import styles from './tabs.module.scss'

const items = [
  { label: 'самый дешёвый', key: 'cheap' },
  { label: 'самый быстрый', key: 'fast' },
  { label: 'оптимальный', key: 'optimal' },
]
export function TabsPanel() {
  const sortTicketsState = useSelector((state) => state.sortTickets)
  const dispatch = useDispatch()
  console.log(sortTicketsState)

  function handlerTabs(key) {
    switch (key) {
      case 'cheap':
        return dispatch({ type: 'SORT_CHEAP' })
      case 'fast':
        return dispatch({ type: 'SORT_FAST' })
      case 'optimal':
        return dispatch({ type: 'SORT_OPTIMAL' })
    }
  }

  return (
    <div className={styles.tabs_group}>
      <Tabs
        className={styles.tab_style}
        onChange={(activeKey) => handlerTabs(activeKey)}
        defaultActiveKey="1"
        items={items}
      />
    </div>
  )
}
