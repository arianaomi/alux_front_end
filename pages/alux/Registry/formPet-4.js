import PetForm4 from '../../../components/Pages/PetForm4'
import Btn from '../../../components/Btn'
import { Row, Col } from 'antd'

export default function FormPet4 () {
  return (
    <>
      <PetForm4 />
      <Row xs={24} sm={24} md={24} lg={24}>
        <Col className='bottonR' span={8} push={8}>
          <Btn content='regresar' classProp='btn_secondary' />
        </Col>
      </Row>
    </>
  )
}
