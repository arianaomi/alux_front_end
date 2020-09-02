import React, { useState } from 'react'
import { Form } from 'antd'
import CustomInput from '../../Input'
import BtnForm from '../../BtnForm'
import styles from '../AddressForm/AdressForm.module.scss'

export default function AlertForm({ callback }) {
  // States
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [block, setBlock] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState()
  const [date, setDate] = useState('')

  // Default form functions
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = values => {
    console.log('Received values of form: ', values)
    callback(values)
  }

  // ToDo: cambiar input de DATE

  return (
    <Form
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label='Número de contacto'>
        <CustomInput
          name='phoneNumber'
          value={phoneNumber}
          type='phone'
          error='Debe ingresar un número de contacto'
          // callback={handleInputStreet}
        />
      </Form.Item>
      s
      <Form.Item label='Fecha'>
        <CustomInput
          name='date'
          value={date}
          type='text'
          error='Debe ingresar la fecha cuando se perdio'
          // callback={handleInputStreet}
        />
      </Form.Item>
      <Form.Item label='Calle'>
        <CustomInput
          name='street'
          value={street}
          type='text'
          error='Debe ingresar la dirección donde usualmente vive la mascota, ésta será utilizada en caso de pérdida'
          // callback={handleInputStreet}
        />
      </Form.Item>
      <Form.Item label='Número' className={styles.label}>
        <CustomInput
          name='number'
          value={number}
          type='text'
          error='Debe ingresar la dirección donde usualmente vive la mascota, ésta será utilizada en caso de pérdida'
          // callback={handleInputNumber}
        />
      </Form.Item>
      <Form.Item label='Block'>
        <CustomInput
          name='block'
          value={block}
          type='text'
          error='Debe ingresar la dirección donde usualmente vive la mascota, ésta será utilizada en caso de pérdida'
          // callback={handleInputBlock}
        />
      </Form.Item>
      <Form.Item label='C.P.  '>
        <CustomInput
          name='zipCode'
          value={zipCode}
          type='text'
          error='Debe ingresar la dirección donde usualmente vive la mascota, ésta será utilizada en caso de pérdida'
          // callback={handleInputZipCode}
        />
      </Form.Item>
      <div className={styles.btn}>
        <Form.Item>
          <BtnForm content='Guardar' typeBtn='btn_alert' />
        </Form.Item>
      </div>
    </Form>
  )
}
