import React, { useState } from 'react'
// ant-s
import { Form } from 'antd'
// components
import CustomInput from '../../Input'
import BtnForm from '../../BtnForm'
// CSS
import styles from './ResetPasswordForm1.module.scss'

function ResetPasswordForm1 ({ callback }) {
  // States

  const [email, setEmail] = useState('')

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
          name='email'
          placeholder='Dato'
          value={email}
          type='text'
          error='Debe ingresar un email válido'
        />
      </Form.Item>
      <div className={styles.btn_wrapper}>
        <Form.Item>
          <BtnForm content='Enviar' typeBtn='btn_primary' />
        </Form.Item>
      </div>
    </Form>
  )
}

export default ResetPasswordForm1
