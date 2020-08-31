// ant -design
import { Row, Col, Radio } from "antd";
// components
import RegisterForm from '../components/Pages/RegisterForm'
import LayoutCurve from '../components/LayoutCurve'
import Footer from '../components/Footer'

// scss
import styles from '../styles/_signUp.module.scss'
const URL_BASE = 'https://api-alux.mybluemix.net/'
export default function signUp() {
  const URL_BASE = 'https://api-alux.mybluemix.net/'

  async function handleForm({ userName, email, password }) {
    console.log(userName, email, password)
    const user = { userName, email, password }
    console.log(user)
    try {
      // fetch(`${URL_BASE}sign-up`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(data)
      // })
      // then((response) => console.log(response))
      const data = await signUp(user)
      console.log(data)
      //   // if (!response.success) {
      //   //   alert(response.error)
      //   //   return
      //   // }
      //   // console.log(response)
      //   // const accessToken = response.data.token
      //   // localStorage.setItem('token', accessToken)
      //   // form.resetFields()
      //   // Router.push('/home')
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <LayoutCurve>
        <Row>
          <Col xs={24} md={0}>
            <div className={styles.container_logo}>
              <img src="/logoBlue.svg" className={styles.logo} />
            </div>
          </Col>
        </Row>

        <Row justify="center">
          <Col xs={0} md={10} lg={10}>
            <div className={styles.wrapperImg}>
              <img src="/ErizoAni.png" />
              <div className={styles.text}>
                <p>Nuestra misión es ayudar a las mascotas a volver a casa</p>
              </div>
            </div>
          </Col>
          <Col xs={22} md={13} lg={8} className={styles.wrapperForm}>

            <RegisterForm callback={handleForm} />
            <Radio>Aceptar terminos y condiciones</Radio>
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
  );
}
