import { CardData } from '../router'
import { generateId, addPrice } from '../specialFunctions'

import styles from './card.module.scss'

export function Card(props) {
  const { ticket } = props
  const { carrier, price, segments } = ticket

  const tickets = segments.map((item) => {
    return (
      <div className={styles.ticket_wrapper} key={generateId()}>
        <CardData item={item} />
      </div>
    )
  })
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <span className={styles.card_price}>{addPrice(price)}</span>
        <span className={styles.card_icon}>
          <img className={styles.logo_company} src={`https://pics.avs.io/99/36/${carrier}.png`} alt="Company logo" />
        </span>
      </div>
      <div className={styles.card_content}>{tickets}</div>
    </div>
  )
}
