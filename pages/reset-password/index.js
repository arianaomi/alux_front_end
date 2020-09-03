import React from 'react'
import { useRouter } from 'next/router'
// components
import ResetPasswordForm1 from '../../components/Pages/ResetPasswordForm1'
import Layout from '../../components/LayoutCurve'
import Footer from '../../components/Footer'
// ant-d && styles
import { Row, Col, Modal } from 'antd'
import styles from '../../styles/reset-password/_reset-password.module.scss'
// services
import { sendNewPassword } from '../../services'

export default function ResetPassword () {
  const router = useRouter()

  async function handleSend (emailValue) {
    try {
      const response = await sendNewPassword(emailValue)
      // console.log(response)
      if (response.success === true) {
        Modal.success({
          content: 'Correo enviado'
        })

        router.push('/logIn')
      } else {
        Modal.error({
          title: 'Error',
          content: 'Correo invalido'
        })
      }
    } catch (error) {
      console.log('error', error)
    }
  }
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
          <ResetPasswordForm1 callback={handleSend} />
        </Col>
        <Col xs={22} md={20} lg={20}>
          <div className={styles.imgDog}>
            <img src='/perroNewPaswMobil.png' className={styles.imgDogTam} />
          </div>
        </Col>
        <Col xs={24} className={styles.footer}>
          <Footer />
        </Col>
      </Row>
    </Layout>
  )
}
