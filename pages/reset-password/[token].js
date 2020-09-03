import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
//services
import { createNewPassword } from '../../services'
//components
import ResetPasswordForm from '../../components/Pages/ResetPasswordForm'
import Layout from '../../components/LayoutCurve'
import Footer from '../../components/Footer'
// ant-d && styles
import { Row, Col, Modal } from 'antd'
import styles from '../../styles/reset-password/_reset-password.module.scss'

export default function ResetPassword() {
  const [tokenUrl, setTokenUrl] = useState('')
  const router = useRouter()
  useEffect(() => {
    const { token } = router.query
    setTokenUrl(token)
    console.log(tokenUrl)
  })

  async function handleNewPassword(passwordValue) {
    console.log(passwordValue)
    try {
      const response = await createNewPassword(passwordValue, tokenUrl)
      console.log(response)
      if (response.success === true) {
        Modal.success({
          content: 'La nueva contraseña se guardo exitosamente',
        })
        router.push('/logIn')
      } else {
        Modal.error({
          title: 'Error',
          content: 'El link expiro, por favor genera uno nuevo',
        })
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Layout title='Nueva contraseña' typeHeader='general'>
      <Row justify='center'>
        <Col xs={24} md={24}>
          <div className={styles.container_logo}>
            <img src='/LogoAluxHomeBlue.png' className={styles.logo} />
          </div>
        </Col>
        <Col xs={22} md={16} lg={14}>
          <h1 className={styles.letter}>Ingresa la nueva contraseña</h1>
          <ResetPasswordForm callback={handleNewPassword} />
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
