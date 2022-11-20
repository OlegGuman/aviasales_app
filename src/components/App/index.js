import { Spin, Alert } from 'antd'
import { ClipLoader } from 'react-spinners'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { dataServer } from '../../service/serviceData'
import { Header, CardList, TabsPanel, FilterPanel } from '../router'

import styles from './app.module.scss'

export function App() {
  const dispatch = useDispatch()
  const loadedAllTickets = useSelector((state) => state.ticketsData.isLoading)
  const ticketsArr = useSelector((state) => state.ticketsData.data)
  const checkboxAllStatus = useSelector((state) => state.checkboxState)

  const isAllNotChecked = checkboxAllStatus.every((item) => !item.checked)

  useEffect(() => {
    dispatch(dataServer())
    /* eslint-disable-next-line */
  }, [])

  const messageLoadedTickets =
    ticketsArr.length && loadedAllTickets ? (
      <div className={styles.loader_wrapper}>
        <ClipLoader color="#2196F3" size={20} />
        <p className={styles.text_loaded}>Идёт загрузка всех билетов...</p>
      </div>
    ) : null
  const hasData = ticketsArr.length !== 0 // !loading
  const spin = ticketsArr.length === 0 && !isAllNotChecked ? <Spin size="large" /> : null
  const errorMessage = isAllNotChecked ? (
    <Alert message="Ошибка" description="Рейсов, подходящих под заданные фильтры, не найдено" type="error" showIcon />
  ) : null
  const cardList = hasData ? <CardList tickets={ticketsArr} /> : null

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
          {messageLoadedTickets}
          {cardList}
        </div>
      </main>
    </div>
  )
}
