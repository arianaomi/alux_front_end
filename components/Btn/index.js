// SCSS
import styles from './Btn.module.scss'

function Btn ({ content, classProp = 'btn_primary' }) {
  return (
    <>
      <button className={`${styles.btn} ${styles[classProp]}`}>{content}</button>
    </>
  )
}

export default Btn
