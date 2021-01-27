import AddressForm from '../../../components/Pages/AddressForm'
import Btn from '../../../components/Btn'
import { Row, Col } from 'antd'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { PayPalButton } from 'react-paypal-button-v2'

export default function PayPal() {
  return (
    <>
      <Header title='Dirección de entrega' />
      <Row>
        <Col offset={2} xs={20} sm={20} md={10} lg={10}>
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
                  orderID: data.orderID
                })
              })
            }}
          />
        </Col>
        <Col offset={4} xs={20} sm={20} md={10} lg={10}>
          <Btn content='Pagar' typeBtn='btn_primary' />
        </Col>
      </Row>
      <Footer />
    </>
  )
}
