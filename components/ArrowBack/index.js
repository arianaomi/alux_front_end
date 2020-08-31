import { useRouter } from 'next/router'
// SCSS
import styles from './ArrowBack.module.scss'

function Arrow ({ typeArrow = 'general', link }) {
  const router = useRouter()
  let arrow
  if (typeArrow === 'alert') {
    arrow = (
      <img
        src='/arrowRed.png'
        onClick={() => router.push(link)}
        className={styles.arrow}
      />
    )
  } else if (typeArrow === 'adoption') {
    arrow = (
      <img
        src='/arrowPurple.png'
        onClick={() => router.push(link)}
        className={styles.arrow}
      />
    )
  } else {
    arrow = (
      <img
        src='/arrowBlue.png'
        onClick={() => router.push(link)}
        className={styles.arrow}
      />
    )
  }

  return <>{arrow}</>
}

export default Arrow
