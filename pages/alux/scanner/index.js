// COMPONENTS
import Layout from '../../../components/Layout'
import Scanner from '../../../components/Scanner'
import Footer from '../../../components/Footer'
import Arrow from '../../../components/ArrowBack'
// ant-d
import { Row, Col } from 'antd'
// sass
import styles from '../../../styles/alux/Scanner/_scanner.module.scss'
export default function ScannerView () {
  return (
    <Layout title='Scanner QR' typeHeader='general'>
      <Row justify='center'>
        <Col xs={22} lg={22}>
          <Arrow typeArrow='general' link='/alux/home' />
        </Col>
        <Col xs={22} md={16} lg={11}>
          <div className={styles.indications}>
            <h1>¿Encontraste una mascota con QR?</h1>
            <h3>Ayudalo a volver a casa</h3>
            <ol>
              <li>Escanea </li>
              <li>Pertite acceder a tu ubicación</li>
              <li>Contacta al dueño</li>
            </ol>
          </div>
        </Col>
        <Col xs={22} md={9} lg={9}>
          <div className={styles.wrapperScanner}>
            <img src='/dogScanner.png' className={styles.img} />
            <div>
              <Scanner />
            </div>
          </div>
        </Col>
        <Col xs={24} className={styles.footer}>
          <Footer />
        </Col>
      </Row>
    </Layout>
  )
}
