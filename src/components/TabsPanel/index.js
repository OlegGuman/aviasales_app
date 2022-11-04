import { Tabs } from 'antd'

import 'antd/dist/antd.min.css'
import styles from './tabs.module.scss'

const items = [
  { label: 'самый дешёвый', key: 'list-1' },
  { label: 'самый быстрый', key: 'list-2' },
  { label: 'оптимальный', key: 'list-3' },
]
export function TabsPanel() {
  return (
    <div className={styles.tabs_group}>
      <Tabs className={styles.tab_style} defaultActiveKey="1" items={items} />
    </div>
  )
}
