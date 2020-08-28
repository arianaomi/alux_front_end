// SCSS
import styles from './Header.module.scss'

function Header ({ title }) {
  const showLogo = title ? (
    <img src='/logoAluxBco.svg' className={`${styles.logo} ${styles.show}`} />
  ) : (
    <img src='/logoAluxBco.svg' className={styles.logo} />
  )

  return (
    <>
      {/* <div className={styles.imgCurve}>
        <img src={logo} />
      </div> */}
      <img src='/curveMobile.svg' className={styles.curveMobile} />
      <img src='/curveDesktop.svg' className={styles.curveDesktop} />
      {showLogo}
      <h1 className={styles.title}> {title}</h1>
    </>
  )
}

export default Header
