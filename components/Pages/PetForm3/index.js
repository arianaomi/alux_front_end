import React, { useState } from 'react'
import { Form, Input } from 'antd'
import Btn from '../../Btn'

const { TextArea } = Input
// CSS

function PetForm3({ callback }) {
  // States
  const [particularSigns, setParticularSigns] = useState('')
  const [medicalInformation, setMedicalInformation] = useState('')

  // Default form functions
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = values => {
    console.log('Received values of form: ', values)
    callback(values)
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
      <Form.Item>
        <Btn
          content='Siguiente'
          typeBtn='btn_primary'
        // ToDo: pasarle el id del perro
        />
      </Form.Item>
    </Form>
  )
}

export default PetForm3
