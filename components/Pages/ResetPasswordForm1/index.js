import React, { useState } from 'react'
import { Form } from 'antd'
import CustomInput from '../../Input'
import Btn from '../../Btn'
// CSS
import styles from './ResetPasswordForm1.module.scss'

function ResetPasswordForm1 () {
  // States

  const [email, setEmail] = useState('')

  // Default form functions
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = values => {
    console.log('Received values of form: ', values)
    // fetch(`${URL_BASE}.json`, {
    //   method: 'POST',
    //   mode: 'cors',
    //   body: JSON.stringify(values)
    // }).then((response) => console.log(response.json))
  }

  // Handlers

  const handleInputEmail = (name, value) => {
    setEmail(value)
    console.log(value)
  }

  return (
    <Form
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item>
        <CustomInput
          className={styles.item}
          name='email'
          placeholder='Correo'
          value={email}
          type='email'
          error='Debe ingresar un email válido'
          callback={handleInputEmail}
        />
      </Form.Item>
      <div className={styles.btn_wrapper}>
        <Form.Item>
          <Btn content='Enviar' typeBtn='btn_primary' link='/' />
        </Form.Item>
      </div>
    </Form>

  )
}

export default ResetPasswordForm1
