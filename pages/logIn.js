import LoginForm from '../components/Pages/LoginForm'
import CurvyHeader from '../components/CurvyHeader'
import { Row, Col } from 'antd'
import styles from './logIn.module.scss'
import Footer from '../components/Footer'
import Btn from '../components/Btn'

export default function logIn() {
  return (
    <>
      <Row>
        <Col>
          <CurvyHeader />
        </Col>
      </Row>
      <Row className={styles.wrapper}>
        <Col xs={20} sm={20} md={10} lg={10}>
          <LoginForm />
          <Btn content='¿Olvidaste tu contraseña?' link='/' typeBtn='btn_secondary' />
          <Btn content='Crear nueva cuenta' link='/' typeBtn='btn_secondary' />
        </Col>
        <Col xs={20} sm={20} md={10} lg={10}>
          <div>
            <img src='/PerritoLog_inMobil.svg' />
            <div className={styles.text}>
              <p> Mantenme a salvo, ayúdame a regresar a casa</p>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />

    </>
  )
}
