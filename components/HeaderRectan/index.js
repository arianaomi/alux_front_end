//
import Link from 'next/link'
// SCSS
import styles from './HeaderRectan.module.scss'
// antd
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

function HeaderRectan ({ title, image }) {
  //* rendering conditional

  const avatar = image ? (
    <Avatar src={image} />
  ) : (
    <Avatar icon={<UserOutlined />} />
  )

  return (
    <>
      <div className={styles.header}>
        <Link href='/'>
          <img src='/logoAluxBco.svg' className={styles.logo} />
        </Link>
        <h1 className={styles.title}> {title}</h1>
        <div className={styles.wrapper}>
          {avatar}
          <p>Menu</p>
        </div>
      </div>
    </>
  )
}

export default HeaderRectan
