import ResetPasswordForm1 from '../../components/Pages/ResetPasswordForm1'
import LayoutCurve from '../../components/LayoutCurve'
import { Row, Col } from 'antd'
import Footer from '../../components/Footer'

export default function ResetPassword () {
  return (
    <LayoutCurve>
      <Row justify='center'>
        <Col xs={0} md={10} lg={10}>
          <h1>
            Ingresa tu correo, se enviará una url para generar la nueva
            contraseña
          </h1>
          <ResetPasswordForm1 />
        </Col>
        <Col xs={0} md={10} lg={10}>
          <div>
            <img src='/perroNewPaswMobil.svg' />
          </div>
        </Col>
      </Row>
      <Footer />
    </LayoutCurve>
  )
}
