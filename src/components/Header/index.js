import Logo from '../../image/Logo.svg'

import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo_wrapper}>
        <a className={styles.logo_link} href="./">
          <img src={Logo} alt="logo" />
        </a>
      </div>
    </header>
  )
}
