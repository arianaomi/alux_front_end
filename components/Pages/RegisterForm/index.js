import React, { useState } from 'react'
import { Form, Row, Col } from 'antd'
import CustomInput from '../../Input'
import Btn from '../../Btn'
// SCSS
import styles from './RegisterForm.module.scss'

function RegisterForm () {
  // States
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Default form functions
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    // acá el fetch
  }
  const handleInputUsername = (name, value) => {
    setUsername(value)
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
              placeholder='Nombre'
              name='username'
              value={username}
              type='text'
              error='Debe ingresar un nombre de usuario'
              callback={handleInputUsername}
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
          <Row xs={24} sm={24} md={24} lg={24}>
            <Col className='bottonR' span={12} push={11}>
              <Form.Item>
                <Btn content='Crear cuenta' classProp='btn_primary' htmlType='submit' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} />
    </Row>
  )
}

export default RegisterForm
