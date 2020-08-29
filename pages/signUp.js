// ant -design
import { Row, Col } from 'antd'
// components
import RegisterForm from '../components/Pages/RegisterForm'
import LayoutCurve from '../components/LayoutCurve'
import Btn from '../components/Btn'
import Footer from '../components/Footer'
// scss
import styles from '../styles/_signUp.module.scss'
export default function signUp() {
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
              <img src='/ErizoAni.svg' />
              <div className={styles.text}>
                <p>Nuestra misión es ayudar a las mascotas a volver a casa</p>
              </div>
            </div>
          </Col>
          <Col xs={22} md={13} lg={8} className={styles.wrapperForm}>
            <RegisterForm />
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
