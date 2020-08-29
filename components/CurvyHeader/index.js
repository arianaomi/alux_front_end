// SCSS
import styles from './CurvyHeader.module.scss'

function CurvyHeader ({ title }) {
  return (
    <>

      <img src='/curveMobile.svg' className={styles.curveMobile} />
      <img src='/curveDesktop.svg' className={styles.curveDesktop} />
      <span className={styles.logoContainer}>
        <img src='/logoBlue.svg' className={`${styles.logo}`} />
      </span>
      <h1 className={styles.title}> {title}</h1>
    </>
  )
}

export default CurvyHeader
