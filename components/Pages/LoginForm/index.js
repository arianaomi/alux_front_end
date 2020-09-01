import React, { useState } from 'react'
// ant-d
import { Form } from 'antd'
// components
import CustomInput from '../../Input'
import BtnForm from '../../BtnForm'
// SCSS
import styles from './LogInForm.module.scss'

function LogInForm({ callback }) {
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
        />
      </Form.Item>
      <Form.Item>
        <CustomInput
          className={styles.item}
          name='password'
          value={password}
          type='password'
          error='Debe ingresar su contraseña'
          placeholder='Contraseña'
        />
      </Form.Item>
      <div className={styles.btn_wrapper}>
        <Form.Item>
          <BtnForm content='Ingresar' typeBtn='btn_primary' />
        </Form.Item>
      </div>
    </Form>
  )
}

export default LogInForm
