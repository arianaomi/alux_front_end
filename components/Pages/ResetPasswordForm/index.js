import React, { useState } from 'react'
import { Form } from 'antd'
import CustomInput from '../../Input'
import Btn from '../../Btn'
// CSS
import styles from './ResetPasswordForm.module.scss'

function ResetPasswordForm () {
  // States

  const [password, setPassword] = useState('')

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
          placeholder='Contraseña'
          name='password'
          value={password}
          error='Debe ingresar su password'
          callback={handleInputPassword}
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
