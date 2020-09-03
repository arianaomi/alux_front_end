import AddressForm from '../../../components/Pages/AddressForm'
import Arrow from '../../../components/ArrowBack'
import { Row, Col } from 'antd'
import Layout from '../../../components/Layout'
import Footer from '../../../components/Footer'
import { PayPalButton } from 'react-paypal-button-v2'

export default function PayPal() {
  // ToDo: cambiar
  return (
    <Layout title='Dirección de envío'>
      <Row justify='center'>
        <Col xs={22} lg={22}>
          <Arrow typeArrow='general' link='/alux/CodeQR/badgePage' />
        </Col>
        <Col xs={22} md={22} lg={22}>
          <h2> Dirección de envío</h2>
          <AddressForm />
        </Col>
        <Col offset={2} pull={2} xs={20} sm={20} md={10} lg={10}>
          <PayPalButton
            amount='0.01'
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              alert('Transaction completed by ' + details.payer.name.given_name)

              // OPTIONAL: Call your server to save the transaction
              return fetch('/paypal-transaction-complete', {
                method: 'post',
                body: JSON.stringify({
                  orderID: data.orderID,
                }),
              })
            }}
          />
        </Col>
      </Row>
      <Footer />
    </Layout>
  )
}
