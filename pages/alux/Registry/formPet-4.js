import PetForm4 from '../../../components/Pages/PetForm4'
import Btn from '../../../components/Btn'
import { Row, Col } from 'antd'
import CurvyHeader from '../../../components/CurvyHeader'

export default function FormPet4 () {
  return (
    <>
      <CurvyHeader />
      <PetForm4 />
      <Row xs={24} sm={24} md={24} lg={24}>
        <Col className='bottonR' span={8} push={8}>
          <Btn content='regresar' typeBtn='btn_secondary' />
        </Col>
      </Row>
    </>
  )
}
