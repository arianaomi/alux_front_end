import Layout from '../../../components/Layout'
import Btn from '../../../components/Btn'
import Footer from '../../../components/Footer'
import { Row, Col } from 'antd'
export default function BadgePage () {
  return (
    <Layout title='Personaliza tu placa'>
      <Row justify='center'>
        <Col xs={22} lg={22}>
          <div>
            <img src='/PlacaMobilFrete.svg' />
            <img src='/PlacaMobilTras.svg' />
          </div>
        </Col>
        <Col xs={22} lg={22}>
          <Btn content='Pagar' link='/alux/CodeQR/payPal' />
        </Col>
      </Row>
      <Footer />
    </Layout>
  )
}
