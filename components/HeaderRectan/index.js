//
import Link from 'next/link'
// components
import AvatarCmptn from '../AvatarCmpnt'
// SCSS
import styles from './HeaderRectan.module.scss'
// ant-d

function HeaderRectan ({ title, image }) {
  //* rendering conditional

  return (
    <>
      <div className={styles.header}>
        <Link href='/alux/home'>
          <img src='/logoAluxBco.svg' className={styles.logo} />
        </Link>
        <h1 className={styles.title}> {title}</h1>
        <div className={styles.wrapper}>
          <AvatarCmptn />
          <p>Menu</p>
        </div>
      </div>
    </>
  )
}

export default HeaderRectan
