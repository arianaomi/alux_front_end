import AddressForm from '../../../components/Pages/AddressForm'
import Btn from '../../../components/Btn'
import { Row, Col } from 'antd'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function FormPet4 () {
  return (

    <>
      <Header title='Tu mascota' />
      <Row>
        <Col offset={4} xs={20} sm={20} md={10} lg={10}>
          <div>
            <img src='/pajaritoForPetDos.svg' />
          </div>
        </Col>

        <Col offset={2} xs={20} sm={20} md={10} lg={10}>
          <AddressForm />
        </Col>
        <Col offset={4} xs={20} sm={20} md={10} lg={10}>
          <Btn content='regresar' typeBtn='btn_secondary' />
        </Col>
      </Row>
      <Footer />
    </>
  )
}
