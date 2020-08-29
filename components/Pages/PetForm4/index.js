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

      <Form.Item>
        <Btn content='Siguiente' typeBtn='btn_primary' />
      </Form.Item>
    </Form>

  )
}

export default PetForm4
