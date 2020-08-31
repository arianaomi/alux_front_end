import PetForm2 from '../../../components/Pages/PetForm2'
import Btn from '../../../components/Btn'
import { Row, Col } from 'antd'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

function FormPet2() {
  return (
    <>
      <Header title='Tu mascota' />
      <Row>
        <Col offset={4} xs={20} sm={20} md={10} lg={10}>
          <div>
            <img src='/pajaritoForPetDos.png' />
          </div>
        </Col>

        <Col offset={2} xs={20} sm={20} md={10} lg={10}>
          <PetForm2 />
        </Col>
        <Col offset={4} xs={20} sm={20} md={10} lg={10}>
          <Btn
            content='regresar'
            typeBtn='btn_secondary'
            link='/alux/Registry/formPet-1'
          />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default FormPet2
