import { Button } from 'antd'

import styles from './footerButton.module.scss'

export function FooterButton() {
  return (
    <div className={styles.button_wrapper}>
      <Button className={styles.button} type="primary" block>
        Показать еще 5 билетов!
      </Button>
    </div>
  )
}
