import React, { useState } from 'react'
import { Form, Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Btn from '../../Btn'
// CSS
import styles from './ResetPasswordForm.module.scss'

function ResetPasswordForm({ callback }) {
  // States

  const [password, setPassword] = useState('')

  // Default form functions
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = values => {
    console.log('Received values of form: ', values)
    callback(values)
  }

  // Handlers

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
      <Form.Item
        label='Ingrese su nueva contraseña' >
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
          <Btn content='Restablecer contraseña' typeBtn='btn_primary' link='/' />
        </Form.Item>
      </div>
    </Form>

  )
}

export default ResetPasswordForm
