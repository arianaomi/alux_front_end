import React, { useState } from 'react'
import { Form, Row, Col } from 'antd'
import CustomInput from '../../Input'
import Btn from '../../Btn'
// CSS
import styles from './LogInForm.module.scss'

function LogInForm () {
  // States
  const [email, setEmail] = useState('')
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
      <Col>
        <h1>Hola desde form</h1>
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
          <Btn content='click' link='/' />
        </Form>
      </Col>
    </Row>
  )
}

export default LogInForm
