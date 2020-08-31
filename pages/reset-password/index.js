import ResetPasswordForm1 from '../../components/Pages/ResetPasswordForm1'
import Layout from '../../components/LayoutCurve'
import { Row, Col } from 'antd'
import Footer from '../../components/Footer'
import styles from '../../styles/reset-password/_reset-password.module.scss'

export default function ResetPassword () {
  return (
    <Layout title='Contraseña' typeHeader='general'>
      <Row justify='center'>
        <Col xs={24} md={24}>
          <div className={styles.container_logo}>
            <img src='/LogoAluxHomeBlue.png' className={styles.logo} />
          </div>
        </Col>
        <Col xs={22} md={16} lg={14}>
          <h1 className={styles.letter}>
            Ingresa tu correo, se enviará una url para generar la nueva
            contraseña
          </h1>
          <ResetPasswordForm1 />
        </Col>
        <Col xs={22} md={20} lg={20}>
          <div className={styles.imgDog}>
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
