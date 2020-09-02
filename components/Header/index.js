// SCSS
import styles from './Header.module.scss'

function Header ({ title }) {
  const showLogo = title ? (
    <img src='/logoAluxBco.svg' className={`${styles.logo} ${styles.show}`} />
  ) : (
    <img src='/logoAluxBco.svg' className={styles.logo} />
  )

  return (

    <div className={styles.header}>
      <img src='/curveMobile.svg' className={styles.curveMobile} />
      <img src='/curveDesktop.svg' className={styles.curveDesktop} />
      {showLogo}
      <h1 className={styles.title}> {title}</h1>
    </div>
  )
}

export default Header
