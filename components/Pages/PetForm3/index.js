import React, { useState } from 'react'
import { Form, Input } from 'antd'
import BtnForm from '../../BtnForm'
import styles from './PetForn3.module.scss'

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
  return (
    <Form
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className={styles.containerForm}
    >
      <Form.Item
        label='Señas particulares'
        name='particularSigns'
        value={particularSigns}
        type='text'
        error='Debe ingresar más información sobre su mascota que sería útil para identificarla'
      >
        <TextArea />
      </Form.Item>

      <Form.Item
        label='Información médica'
        name='medicalInformation'
        value={medicalInformation}
        type='text'
        error='Debe ingresar información médica de su mascota que sería útil en caso de pérdida'
      >
        <TextArea />
      </Form.Item>
      <div className={styles.btn}>
        <Form.Item>
          <BtnForm content='Siguiente' typeBtn='btn_primary' />
        </Form.Item>
      </div>
    </Form>
  )
}

export default PetForm3
