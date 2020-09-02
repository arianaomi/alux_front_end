// pages/404.js
import Layout from '../components/Layout'
import styles from '../styles/_404.module.scss'
export default function Custom404() {
  return (
    <Layout title='UPS! '>
      <div className={styles.wrapper}>
        <img src='/404.jpg' className={styles.cat} />
        <h1>404 - Page Not Found</h1>
      </div>
    </Layout>
  )
}
