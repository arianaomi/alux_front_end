import RegisterForm from '../components/Pages/RegisterForm'
import CurvyHeader from '../components/CurvyHeader'
import Btn from '../components/Btn'
import { Row, Col } from 'antd'
import styles from '../styles/signUp.module.scss'
import Footer from '../components/Footer'

export default function signUp() {
  return (
    <>
      <Row>
        <Col>
          <CurvyHeader />
        </Col>
      </Row>
      <Row className={styles.wrapper}>
        <Col xs={20} sm={20} md={10} lg={10}>
          <RegisterForm />
          <div className={styles.btn_wrapper}>
            <Btn
              content='¿Olvidaste tu contraseña?'
              link='/'
              typeBtn='btn_secondary'
            />
            <Btn
              content='Crear nueva cuenta'
              link='/'
              typeBtn='btn_secondary'
            />
          </div>
        </Col>
        <Col xs={20} sm={20} md={10} lg={10}>
          <div className={styles.img_container}>
            <img width='300px' src='/ErizoAni.png' />
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  )
}
