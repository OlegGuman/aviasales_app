import { addInfoStops, getTimeTicket, getDateTicket, getTimeDestination } from '../../specialFunctions'

import styles from './cardData.module.scss'

export function CardData(props) {
  const { item } = props
  const { date, destination, duration, origin, stops } = item

  return (
    <>
      <div className={styles.card_body_left}>
        <h3 className={styles.card_route}>{`${origin} - ${destination}`}</h3>
        <span className={styles.ticketDate}>{`${getDateTicket(date)} – ${getTimeDestination(
          getDateTicket(date),
          duration
        )}`}</span>
      </div>
      <div className={styles.card_body_center}>
        <h3 className={styles.ticketDuration}>В пути</h3>
        <span className={styles.card_time}>{getTimeTicket(duration)}</span>
      </div>
      <div className={styles.card_body_right}>
        <h3 className={styles.ticketTransfer}>{addInfoStops(stops)}</h3>
        <span className={styles.ticketStops}>{stops.join(', ')}</span>
      </div>
    </>
  )
}
