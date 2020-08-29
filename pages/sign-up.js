import RegisterForm from '../components/Pages/RegisterForm'
import CurvyHeader from '../components/CurvyHeader'
import Btn from '../components/Btn'
import { Row, Col } from 'antd'

export default function Signup () {
  return (
    <>
      <Row>
        <Col>
          <CurvyHeader />
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={2} md={2} lg={2} />
        <Col xs={20} sm={20} md={12} lg={12}>
          <RegisterForm />
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} />
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Btn content='regresar' link='/' typeBtn='btn_secondary' />
        </Col>
      </Row>
    </>
  )
}
