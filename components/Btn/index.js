//
import { useRouter } from 'next/router'
// SCSS
import styles from './Btn.module.scss'

function Btn({ content, typeBtn = 'btn_primary', link }) {
  const router = useRouter()
  return (
    <>
      <button
        className={`${styles.btn} ${styles[typeBtn]}`}
        onClick={() => router.push(link)}
      >
        {content}
      </button>
    </>
  )
}

export default Btn
