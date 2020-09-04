// SCSS
import styles from './Btn.module.scss'

function BtnForm ({ handlerClick, content, typeBtn = 'btn_primary' }) {
  return (
    <>
      <button
        className={`${styles.btn} ${styles[typeBtn]}`}
        onClick={() => handlerClick()}
      >
        {content}
      </button>
    </>
  )
}

export default BtnForm
