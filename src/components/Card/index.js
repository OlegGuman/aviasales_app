import cardLogo from '../../image/S7_Logo.png'

import styles from './card.module.scss'

export function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <span className={styles.card_price}>13 400 Р</span>
        <span className={styles.card_icon}>
          <img src={cardLogo} alt="logo" />
        </span>
      </div>
      <div className={styles.card_body}>
        <div className={styles.card_body_top}>
          <div className={styles.card_body_left}>
            <div className={styles.card_route}>
              <span>MOW – HKT</span>
            </div>
            <div className={styles.card_timing}>
              <span>10:45 – 08:00</span>
            </div>
          </div>
          <div className={styles.card_body_center}>
            <div className={styles.card_timeTitle}>
              <span>В пути</span>
            </div>
            <div className={styles.card_time}>
              <span>21ч 15м</span>
            </div>
          </div>
          <div className={styles.card_body_right}>
            <div className={styles.card_transfer}>
              <span>2 пересадки</span>
            </div>
            <div className={styles.card_transferName}>
              <span>HKG, JNB</span>
            </div>
          </div>
        </div>
        <div className={styles.card_body_bottom}></div>
      </div>
    </div>
  )
}
