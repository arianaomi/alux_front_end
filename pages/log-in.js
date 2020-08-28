import LoginForm from '../components/Pages/LoginForm'
import CurvyHeader from '../components/CurvyHeader'
import { Row, Col } from 'antd'

export default function Login () {
  return (
    <>
      <Row> <Col xs={24} sm={24} md={24} lg={24} />
        <CurvyHeader />
      </Row>
      <Row> <Col xs={24} sm={24} md={12} lg={12} />
        <LoginForm />
      </Row>
      <Row> <Col xs={24} sm={24} md={12} lg={12} />
        <img src='' />
      </Row>
    </>
  )
}
