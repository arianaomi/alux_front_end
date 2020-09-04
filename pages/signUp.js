//
import Link from 'next/link'
import Router from 'next/router'
// components
import RegisterForm from '../components/Pages/RegisterForm'
import LayoutCurve from '../components/LayoutCurve'
import Footer from '../components/Footer'

// ant -design
import { Row, Col, Radio } from 'antd'
// scss
import styles from '../styles/_signUp.module.scss'
// services
import { signUpService, logInService } from '../services'

export default function signUp() {
  async function handleForm({ userName, email, password }) {
    const user = { userName, email, password }
    try {
      const response = await signUpService(user)
      const responseLog = await logInService(user)
      const token = responseLog.data.token
      localStorage.setItem('token', token)
      const payload = JSON.parse(atob(token.split('.')[1]))
      console.log(payload)
      console.log('user id: ', payload.id)
      const userId = payload.id
      localStorage.setItem('userId', userId)
      Router.push('/alux/Registry/formPet-1')
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <LayoutCurve title='Registro dueño'>
        <Row>
          <Col xs={24} md={0}>
            <div className={styles.container_logo}>
              <img src='/LogoAluxHomeBlue.png' className={styles.logo} />
            </div>
          </Col>
        </Row>

        <Row justify='center'>
          <Col xs={0} md={10} lg={10}>
            <div className={styles.wrapperImg}>
              <img src='/ErizoAni.png' />
              <div className={styles.text}>
                <p>Nuestra misión es ayudar a las mascotas a volver a casa</p>
              </div>
            </div>
          </Col>
          <Col xs={22} md={13} lg={8} className={styles.wrapperForm}>
            <RegisterForm callback={handleForm} />
            <div className={styles.wrapperBtn}>
              <div className={styles.wrapperBtnd}>
                <Link href='/logIn'>
                  <a>Ya tengo cuenta. Inicia sesión</a>
                </Link>
              </div>
              <div className={styles.wrapperBtnd}>
                <Radio>Aceptar términos y condiciones</Radio>
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
