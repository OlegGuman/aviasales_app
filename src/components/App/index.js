import { Header, CardList, TabsPanel, FilterPanel, FooterButton } from '../router'

//import 'antd/dist/antd.min.css'
import styles from './app.module.scss'

export function App() {
  return (
    <div className={styles.global_container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.left}>
          <FilterPanel />
        </div>
        <div className={styles.right}>
          <TabsPanel />
          <CardList />
          <FooterButton />
        </div>
      </main>
    </div>
  )
}
