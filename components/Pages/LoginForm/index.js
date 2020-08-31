import React, { useState } from 'react'
import { Form } from 'antd'
import CustomInput from '../../Input'
import Btn from '../../Btn'

// CSS
import styles from './LogInForm.module.scss'

function LogInForm ({ callback }) {
  // States
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Default form functions
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const onFinish = values => {
    console.log(values)
    callback(values)
  }

  // Handlers
  const handleInputEmail = (name, value) => {
    setEmail(value)
    console.log(value)
  }

  const handleInputPassword = (name, value) => {
    setPassword(value)
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
      <Form.Item>
        <CustomInput
          className={styles.item}
          placeholder='Contraseña'
          name='password'
          value={password}
          error='Debe ingresar su password'
          callback={handleInputPassword}
        />
      </Form.Item>
      <div className={styles.btn_wrapper}>
        <Form.Item>
          <Btn content='Ingresar' typeBtn='btn_primary' link='/alux/home' />
        </Form.Item>
      </div>
    </Form>
  )
}

export default LogInForm
