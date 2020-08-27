// SCSS
import styles from './CurHeader.module.scss'
import logo from '../../public/img/LogoAluxBco.svg'
import curva from '../../public/img/curva.svg'
import curvaD from '../../public/img/curvaWeb.svg'

function CurHeader ({ title }) {
  const showLogo = title ? (
    <img src={logo} className={`${styles.logo} ${styles.show}`} />
  ) : (
    <img src={logo} className={styles.logo} />
  )

  return (
    <>
      {/* <div className={styles.imgCurve}>
        <img src={logo} />
      </div> */}
      <img src={curva} className={styles.curveMobile} />
      <img src={curvaD} className={styles.curveDesktop} />
      {showLogo}
      <h1 className={styles.title}> {title}</h1>
    </>
  )
}

export default CurHeader
