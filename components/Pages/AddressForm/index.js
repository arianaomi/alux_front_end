import React, { useState } from 'react'
import { Form } from 'antd'
import CustomInput from '../../Input'
import BtnForm from '../../BtnForm'
import styles from './AdressForm.module.scss'

export default function AddressForm({ callback }) {
  // States
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [block, setBlock] = useState('')
  const [zipCode, setZipCode] = useState('')

  // Default form functions
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = values => {
    console.log('Received values of form: ', values)
    callback(values)
  }
  // Handlers
  const handleInputStreet = (name, value) => {
    setStreet(value)
    console.log(value)
  }
  const handleInputNumber = (name, value) => {
    setNumber(value)
    console.log(value)
  }
  const handleInputBlock = (name, value) => {
    setBlock(value)
    console.log(value)
  }

  const handleInputZipCode = (name, value) => {
    setZipCode(value)
    console.log(value)
  }

  return (
    <Form
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label='Calle'>
        <CustomInput
          name='street'
          value={street}
          type='text'
          error='Debe ingresar la dirección donde usualmente vive la mascota, ésta será utilizada en caso de pérdida'
          callback={handleInputStreet}
        />
      </Form.Item>

      <Form.Item label='Número'>
        <CustomInput
          name='number'
          value={number}
          type='text'
          error='Debe ingresar la dirección donde usualmente vive la mascota, ésta será utilizada en caso de pérdida'
          callback={handleInputNumber}
        />
      </Form.Item>

      <Form.Item label='Block'>
        <CustomInput
          name='block'
          value={block}
          type='text'
          error='Debe ingresar la dirección donde usualmente vive la mascota, ésta será utilizada en caso de pérdida'
          callback={handleInputBlock}
        />
      </Form.Item>

      <Form.Item label='C.P.'>
        <CustomInput
          name='zipCode'
          value={zipCode}
          type='text'
          error='Debe ingresar la dirección donde usualmente vive la mascota, ésta será utilizada en caso de pérdida'
          callback={handleInputZipCode}
        />
      </Form.Item>

      <div className={styles.btn}>
        <Form.Item>
          <BtnForm content='Guardar' typeBtn='btn_primary' />
        </Form.Item>
      </div>
    </Form>
  )
}
