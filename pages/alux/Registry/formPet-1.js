import PetForm1 from '../../../components/Pages/PetForm1'
import Btn from '../../../components/Btn'
import { Row, Col } from 'antd'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function FormPet1 () {
  return (
    <>
      <Header title='Tu mascota' />
      <Row>
        <Col offset={2} xs={20} sm={20} md={10} lg={10}>
          <PetForm1 />
        </Col>
        <Col offset={4} xs={20} sm={20} md={10} lg={10}>
          <Btn content='regresar' typeBtn='btn_secondary' />
        </Col>

        <Col xs={20} sm={20} md={10} lg={10}>
          <div>
            <img src='/ratonMobilCuatro.svg' />
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  )
}
