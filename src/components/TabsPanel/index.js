import { Tabs } from 'antd'
import 'antd/dist/antd.min.css'
import { useDispatch } from 'react-redux'

import {
  statusCheap,
  statusFast,
  statusOptimal,
  sortFast,
  sortCheap,
  sortOptimal,
} from '../../redux/actions/actionCreators'

import styles from './tabs.module.scss'

const items = [
  { label: 'самый дешёвый', key: 'cheap' },
  { label: 'самый быстрый', key: 'fast' },
  { label: 'оптимальный', key: 'optimal' },
]
export function TabsPanel() {
  const dispatch = useDispatch()

  function sortTickets(id) {
    switch (id) {
      case 'cheap':
        return dispatch(sortCheap(id))
      case 'fast':
        return dispatch(sortFast(id))
      case 'optimal':
        return dispatch(sortOptimal(id))
    }
  }

  function handlerTabs(key) {
    sortTickets(key)
    switch (key) {
      case 'cheap':
        return dispatch(statusCheap())
      case 'fast':
        return dispatch(statusFast())
      case 'optimal':
        return dispatch(statusOptimal())
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
