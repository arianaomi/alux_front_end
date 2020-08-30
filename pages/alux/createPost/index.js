import PostForm from '../../../components/Pages/PostForm'
import Btn from '../../../components/Btn'
import { Row, Col } from 'antd'
import HeaderRectan from '../../../components/HeaderRectan'
import Footer from '../../../components/Footer'

export default function createPost () {
  return (
    <>
      <HeaderRectan title='Nuevo Post' />
      <Row>
        <Col offset={2} xs={20} sm={20} md={10} lg={10}>
          <PostForm />
        </Col>
        <Col offset={4} xs={20} sm={20} md={10} lg={10}>
          <Btn content='regresar' typeBtn='btn_secondary' />
        </Col>
      </Row>
      <Footer />
    </>
  )
}
