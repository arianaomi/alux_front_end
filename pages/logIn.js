// ant-design
import { Row, Col } from 'antd'
// Components
import LayoutCurve from '../components/LayoutCurve'
import LoginForm from '../components/Pages/LoginForm'
import Footer from '../components/Footer'
import Btn from '../components/Btn'
// scss
import styles from '../styles/_logIn.module.scss'

export default function logIn () {
  return (
    <>
      <LayoutCurve>
        <Row>
          <Col xs={24} md={0}>
            <div className={styles.container_logo}>
              <img src='/logoBlue.svg' className={styles.logo} />
            </div>
          </Col>
        </Row>

        <Row justify='center'>
          <Col xs={0} md={10} lg={10}>
            <div className={styles.wrapperImg}>
              <img src='/PerritoLog_inMobil.svg' />
              <div className={styles.text}>
                <p> Mantenme a salvo, ayúdame a regresar a casa</p>
              </div>
            </div>
          </Col>
          <Col xs={22} md={12} lg={7} className={styles.wrapperForm}>
            <LoginForm />
            <div className={styles.containerBbtnA}>
              <div className={styles.btn}>
                <Btn
                  content='Crear nueva cuenta'
                  link='/signUp'
                  typeBtn='btn_secondary'
                />
              </div>
              <div className={styles.forgetPass}>
                <a>¿Olvidaste tu contraseña?</a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <div className={styles.footer}>
              <Footer />
            </div>
          </Col>
        </Row>
      </LayoutCurve>
    </>
  )
}
