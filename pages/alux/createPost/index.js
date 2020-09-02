import PostForm from '../../../components/Pages/PostForm'
import Btn from '../../../components/Btn'
import { Row, Col } from 'antd'
import HeaderRectan from '../../../components/HeaderRectan'
import Footer from '../../../components/Footer'
import styles from '../../../styles/alux/UnPost/PostNew/_UploadPost.module.scss'

export default function createPost () {
  return (
    <>
      <HeaderRectan title='Nuevo Post' />
      <Row justify='center'>
        <Col xs={20} sm={20} md={15} lg={15}>
          <div className={styles.forEt}>
            <PostForm />
          </div>
        </Col>
        <Col xs={20} sm={20} md={10} lg={24}>
          <div className={styles.containerBtn}>
            <Btn content='regresar' typeBtn='btn_secondary' />
          </div>
        </Col>
      </Row>
      <div className={styles.containerimg}>
        <img src='/animalitosPost.png' className={styles.img} />
      </div>
      <Footer />
    </>
  )
}
