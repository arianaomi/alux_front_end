import PetForm2 from '../../../components/Pages/PetForm2'
import Btn from '../../../components/Btn'
import { Row, Col } from 'antd'

function FormPet2 () {
  return (
    <>
      <PetForm2 />
      <Row xs={24} sm={24} md={24} lg={24}>
        <Col className='bottonR' span={8} push={8}>
          <Btn content='regresar' classProp='btn_secondary' />
        </Col>
      </Row>
    </>
  )
}

export default FormPet2
