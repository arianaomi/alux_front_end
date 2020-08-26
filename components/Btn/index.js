// SCSS
import styles from './Btn.module.scss'

function Btn ({ content, typeBtn = 'btn_primary' }) {
  return (
    <>
      <h1>Button</h1>
      <button className={`${styles.btn} ${styles[typeBtn]}`}>{content}</button>
    </>
  )
}

export default Btn
