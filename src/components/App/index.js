import { Alert, Spin } from 'antd'
import { useEffect, useState } from 'react'

import AviasalesService from '../../service/aviasalesDBService'
import { Header, CardList, TabsPanel, FilterPanel } from '../router'

import styles from './app.module.scss'

export function App() {
  const [tickets, setTickets] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const idSearch = new AviasalesService().getSearchId()
    idSearch
      .then((data) => {
        setTickets(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [])

  const hasData = !(loading || error)
  const spin = loading ? <Spin size="large" /> : null
  const errorMessage = error ? (
    <Alert message="Ошибка" description="Упс! Не удалось получить данные!" type="error" showIcon />
  ) : null
  const cardList = hasData ? <CardList tickets={tickets} /> : null

  return (
    <div className={styles.global_container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.left}>
          <FilterPanel />
        </div>
        <div className={styles.right}>
          <TabsPanel />
          {spin}
          {errorMessage}
          {cardList}
        </div>
      </main>
    </div>
  )
}
