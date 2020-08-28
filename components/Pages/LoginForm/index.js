import React, { useState } from 'react'
import { Form, Row, Col } from 'antd'
import CustomInput from '../../Input'
import Btn from '../../Btn'
// CSS
import styles from './LogInForm.module.scss'

function LogInForm() {
  // States
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Default form functions
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = (values) => {
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

  const handleInputPassword = (name, value) => {
    setPassword(value)
    console.log(value)
  }

  return (
    <Row>
      <Col xs={2} sm={2} md={2} lg={2} />
      <Col xs={20} sm={20} md={20} lg={20}>
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

          <Form.Item>
            <Btn content='Iniciar sesión' classProp='btn_primary' htmlType='submit' />
          </Form.Item>
        </Form>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} />
    </Row>
  )
}

export default LogInForm
