import PetForm3 from '../../../components/Pages/PetForm3'
import Btn from '../../../components/Btn'
import CurvyHeader from '../../../components/CurvyHeader'
import { Row, Col } from 'antd'

export default function FormPet3() {
  return (
    <>
      <CurvyHeader />
      <PetForm3 />
      <Row xs={24} sm={24} md={24} lg={24}>
        <Col className='bottonR' span={8} push={8}>
          <Btn content='regresar' classProp='btn_secondary' />
        </Col>
      </Row>
    </>
  )
}
