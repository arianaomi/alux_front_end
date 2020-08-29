import React, { useState } from 'react'
import { Form, Row, Select, Col, Input } from 'antd'
import CustomInput from '../../Input'
import Btn from '../../Btn'

const { TextArea } = Input
// CSS

const { Option } = Select

function PetForm3() {
  // States
  const [particularSigns, setParticularSigns] = useState('')
  const [medicalInformation, setMedicalInformation] = useState('')

  // Default form functions
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    // acá ir al siguiente componente
  }
  // Handlers
  const handleInputSigns = (name, value) => {
    setParticularSigns(value)
    console.log(value)
  }

  const handleInputMedical = (name, value) => {
    setMedicalInformation(value)
    console.log(value)
  }

  return (
    <Row>
      <Col xs={2} sm={2} md={2} lg={2} />
      <Col xs={20} sm={20} md={20} lg={20}>
        <Form
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >

          <Form.Item
            label='Señas particulares'
            name='particularSigns'
            value={particularSigns}
            type='text'
            error='Debe ingresar más información sobre su mascota que sería útil para identificarla'
            callback={handleInputSigns}
          >
            <TextArea />
          </Form.Item>

          <Form.Item
            label='Información médica'
            name='medicalInformation'
            value={medicalInformation}
            type='text'
            error='Debe ingresar información médica de su mascota que sería útil en caso de pérdida'
            callback={handleInputMedical}
          >
            <TextArea />
          </Form.Item>

          <Row xs={24} sm={24} md={24} lg={24}>
            <Col className='bottonR' span={12} push={11}>
              <Form.Item>
                <Btn content='Siguiente' typeBtn='btn_primary' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} />
    </Row>
  )
}

export default PetForm3
