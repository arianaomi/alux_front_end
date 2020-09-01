import React, { useState } from 'react'
import { Form, Input } from 'antd'
import CustomInput from '../../Input'
import BtnForm from '../../BtnForm'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

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
        <Input.Password
          className={styles.item}
          name='password'
          value={password}
          error='Debe ingresar su password'
          callback={handleInputPassword}
          placeholder='Contraseña'
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
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
