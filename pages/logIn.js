import Link from 'next/link'
import Router from 'next/router'
// Components
import LayoutCurve from '../components/LayoutCurve'
import LoginForm from '../components/Pages/LoginForm'
import Footer from '../components/Footer'
import Btn from '../components/Btn'
// ant-design
import { Row, Col, message } from 'antd'
// scss
import styles from '../styles/_logIn.module.scss'
// services
import { logInService } from '../services'

export default function logIn () {
  async function handleForm ({ email, password }) {
    const user = { email, password }
    try {
      const response = await logInService(user)
      const token = response.data.token
      localStorage.setItem('token', token)
      const payload = JSON.parse(atob(token.split('.')[1]))
      const userId = payload.id
      localStorage.setItem('userId', userId)
      Router.push('/alux/home')
    } catch (error) {
      message.error('Datos invalidos')
    }
  }

  return (
    <>
      <LayoutCurve title='Iniciar sesión'>
        <Row>
          <Col xs={24} md={0}>
            <div className={styles.container_logo}>
              <img src='/LogoAluxHomeBlue.png' className={styles.logo} />
            </div>
          </Col>
        </Row>
        <Row justify='center' className={styles.cotainerLogin}>
          <Col xs={0} md={10} lg={10}>
            <div className={styles.wrapperImg}>
              <img src='/PerritoLog_inMobil.png' />
              <div className={styles.text}>
                <p> Mantenme a salvo, ayúdame a regresar a casa</p>
              </div>
            </div>
          </Col>
          <Col xs={22} md={12} lg={7} className={styles.wrapperForm}>
            <LoginForm callback={handleForm} />
            <div className={styles.containerBbtnA}>
              <div className={styles.btn}>
                <Btn
                  content='Crear nueva cuenta'
                  link='/signUp'
                  typeBtn='btn_secondary'
                />
              </div>
              <div className={styles.forgetPass}>
                <Link href='/reset-password'>
                  <a>¿Olvidaste tu contraseña?</a>
                </Link>
                <a />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <div>
              <Footer />
            </div>
          </Col>
        </Row>
      </LayoutCurve>
    </>
  )
}
