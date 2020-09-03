import React, { useState } from 'react'
import { Form, Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import BtnForm from '../../BtnForm'
import CustomInput from '../../Input'
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
          name='password'
          value={password}
          type='password'
          error='Debe ingresar su contraseña'
          placeholder='Contraseña'
        />
      </Form.Item>

      <div className={styles.btn_wrapper}>
        <Form.Item>
          <BtnForm content='Restablecer contraseña' typeBtn='btn_primary' />
        </Form.Item>
      </div>
    </Form>
  )
}

export default ResetPasswordForm
