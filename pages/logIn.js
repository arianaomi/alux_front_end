import LoginForm from '../components/Pages/LoginForm'
import CurvyHeader from '../components/CurvyHeader'
import { Row, Col } from 'antd'

export default function logIn () {
  return (
    <>
      <Row>
        <Col>
          <CurvyHeader />
        </Col>
      </Row>
      <Row>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </>
  )
}
