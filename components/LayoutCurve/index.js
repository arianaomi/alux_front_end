import Header from '../Header'
import styles from './LayoutCurve.module.scss'
function LayoutCurve ({ children, title, image }) {
  return (
    <>
      <Header title={title} image={image} />
      <div className={styles.wrapper}>{children}</div>
    </>
  )
}

export default LayoutCurve
