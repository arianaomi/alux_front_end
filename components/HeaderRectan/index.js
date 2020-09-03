//
import Link from 'next/link'
// components
import AvatarCmptn from '../AvatarCmpnt'
// SCSS
import styles from './HeaderRectan.module.scss'
// ant-d
import BuMenu from '../../components/MenuH'

function HeaderRectan({ title, image, typeHeader = 'general' }) {
  //* rendering conditional

  return (
    <>
      <div className={styles.posStiky}>
        <div className={`${styles.header} ${styles[typeHeader]}`}>
          <Link href='/alux/home'>
            <img src='/logoAluxBco.svg' className={styles.logo} />
          </Link>
          <h1 className={styles.title}> {title}</h1>
          <div className={styles.wrapper}>
            <AvatarCmptn />
          </div>
          <div className={styles.wrapper}>

            <BuMenu />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderRectan
