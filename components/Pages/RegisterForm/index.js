import React, { useState } from 'react'
import { Form } from 'antd'
import CustomInput from '../../Input'
import Btn from '../../Btn'

// SCSS
import styles from './RegisterForm.module.scss'

function RegisterForm ({ callback }) {
  // States
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Default form functions
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = (values) => {
    console.log(typeof (values))
    callback(values)
  }

  const handleInputUserName = (name, value) => {
    setUserName(value)
    console.log(value)
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
          placeholder='Nombre'
          name='userName'
          value={userName}
          type='text'
          error='Debe ingresar un nombre de usuario'
          callback={handleInputUserName}
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
          callback={handleInputEmail}
        />
      </Form.Item>

      <Form.Item>
        <CustomInput
          className={styles.item}
          placeholder='Contraseña'
          name='password'
          value={password}
          error='Debe ingresar su contraseña'
          callback={handleInputPassword}
        />
      </Form.Item>
      <div className={styles.btn_wrapper}>
        <Form.Item>
          <Btn
            content='Crear cuenta'
            typeBtn='btn_primary'
            link='/alux/Registry/formPet-1'
          />
        </Form.Item>
      </div>
    </Form>
  )
}

export default RegisterForm
