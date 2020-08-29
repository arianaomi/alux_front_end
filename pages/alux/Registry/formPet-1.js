import PetForm1 from '../../../components/Pages/PetForm1'
import Btn from '../../../components/Btn'
import { Row, Col } from 'antd'
import CurvyHeader from '../../../components/CurvyHeader'

export default function FormPet1 () {
  return (
    <>
      <CurvyHeader />
      <PetForm1 />
      <Row xs={24} sm={24} md={24} lg={24}>
        <Col className='bottonR' span={8} push={8}>
          <Btn content='regresar' classProp='btn_secondary' />
        </Col>
      </Row>
    </>
  )
}
