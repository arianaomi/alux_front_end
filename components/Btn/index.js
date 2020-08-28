//
import Link from 'next/link'
// SCSS
import styles from './Btn.module.scss'

function Btn({ content, typeBtn = 'btn_primary', link }) {
  return (
    <>
      <Link href={link}>
        <button className={`${styles.btn} ${styles[typeBtn]}`}>
          {content}
        </button>
      </Link>
    </>
  )
}

export default Btn
