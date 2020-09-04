// SCSS
import styles from './Btn.module.scss'

function BtnForm({ content, typeBtn = 'btn_primary' }) {
  return (
    <>
      <button
        className={`${styles.btn} ${styles[typeBtn]}`}
      >
        {content}
      </button>
    </>
  )
}

export default BtnForm
