import React, { useState } from 'react'
import { Form, Input } from 'antd'
import CustomInput from '../../Input'
import BtnForm from '../../BtnForm'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

// SCSS
import styles from './RegisterForm.module.scss'

function RegisterForm({ callback }) {
  // States
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Default form functions
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = (values) => {
    console.log(values)
    callback(values)
  }

  // // Handlers
  // const handleInputEmail = (name, value) => {
  //   setEmail(value)
  //   console.log(value)
  // }

  // const handleInputPassword = (name, value) => {
  //   setPassword(value)
  //   console.log(value)
  // }

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
          placeholder='Nombre'
          name='userName'
          value={userName}
          type='text'
          error='Debe ingresar un nombre de usuario'
        />
      </Form.Item>

      <Form.Item>
        <CustomInput
          className={styles.item}
          placeholder='Correo'
          name='email'
          value={email}
          type='email'
          error='Debe ingresar un correo electrónico válido'
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
          <BtnForm
            content='Crear cuenta'
            typeBtn='btn_primary'
          />
        </Form.Item>
      </div>
    </Form>
  )
}

export default RegisterForm
