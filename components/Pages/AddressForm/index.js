import React, { useState } from 'react'
import { Form } from 'antd'
import CustomInput from '../../Input'
import Btn from '../../Btn'

export default function AddressForm({ callback }) {
  // States
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [block, setBlock] = useState('')
  const [zipCode, setZipCode] = useState('')
  //! idPet harcodeado
  const idPet = '5f4c1549aea180148c144429'

  // Default form functions
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = values => {
    console.log('Received values of form: ', values)
    const address = values
    console.log(address)
    callback(address)

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
        <Form.Item
          label='Calle'
          name='street'
          value={street}
          type='text'
          error='Debe ingresar la dirección donde usualmente vive la mascota, ésta será utilizada en caso de pérdida'
          callback={handleInputStreet}
        >
          <CustomInput />
        </Form.Item>

        <Form.Item
          label='Número'
          name='number'
          value={number}
          type='text'
          error='Debe ingresar la dirección donde usualmente vive la mascota, ésta será utilizada en caso de pérdida'
          callback={handleInputNumber}
        >
          <CustomInput />
        </Form.Item>

        <Form.Item
          label='Block'
          name='block'
          value={block}
          type='text'
          error='Debe ingresar la dirección donde usualmente vive la mascota, ésta será utilizada en caso de pérdida'
          callback={handleInputBlock}
        >
          <CustomInput />
        </Form.Item>

        <Form.Item
          label='C.P.'
          name='zipCode'
          value={zipCode}
          type='text'
          error='Debe ingresar la dirección donde usualmente vive la mascota, ésta será utilizada en caso de pérdida'
          callback={handleInputZipCode}
        >
          <CustomInput />
        </Form.Item>

        <Form.Item>
          <Btn
            content='Guardar'
            typeBtn='btn_primary'
            link={`/alux/CodeQR/${idPet}`}
          />
        </Form.Item>
      </Form>
    )
  }
}
