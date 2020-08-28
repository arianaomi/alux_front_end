import React, { useState } from 'react'
import { Form, Row, Select, Col, Input } from 'antd'
import CustomInput from '../../Input'
import Btn from '../../Btn'

const { TextArea } = Input
// CSS

const { Option } = Select

function PetForm4 () {
  // States
  const [address, setAddress] = useState('')

  // Default form functions
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    // acá ir al siguiente componente
  }
  // Handlers
  const handleInputAddress = (name, value) => {
    setAddress(value)
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
            label='Dirección'
            name='address'
            value={address}
            type='text'
            error='Debe ingresar la dirección donde usualmente vive la mascota, ésta será utilizada en caso de pérdida'
            callback={handleInputAddress}
          >
            <CustomInput />
          </Form.Item>

          <Row xs={24} sm={24} md={24} lg={24}>
            <Col className='bottonR' span={8} push={8}>
              <Form.Item>
                <Btn content='Siguiente' classProp='btn_primary' htmlType='submit' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} />
    </Row>
  )
}

export default PetForm4
