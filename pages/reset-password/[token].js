import ResetPasswordForm from '../../components/Pages/ResetPasswordForm'
import Layout from '../../components/LayoutCurve'
import { Row, Col } from 'antd'
import Footer from '../../components/Footer'
import styles from '../../styles/reset-password/_reset-password.module.scss'

export default function ResetPassword() {
  return (
    <Layout title='Scanner QR' typeHeader='general'>
      <Row justify='center'>
        <Col xs={22} md={11} lg={11}>
          <h1>Ingresa la nueva contraseña</h1>
          <ResetPasswordForm />
        </Col>
        <Col xs={22} md={11} lg={11}>
          <div>
            <img src='/perroNewPaswMobil.png' />
          </div>
        </Col>
        <Col xs={24} className={styles.footer}>
          <Footer />
        </Col>
      </Row>
    </Layout>
  )
}
