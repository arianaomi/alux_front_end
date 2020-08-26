import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'antd';
import CustomInput from '../../components/Input';
// CSS
import styles from './LogIn.module.css';

function LogIn () {
  // States
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //Default form functions
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    fetch('https://reactsessions-ac545.firebaseio.com/equipouno.json', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(values)
    }).then((response) => console.log(response.json))
  };

  // Handlers
  const handleInputEmail = (name, value) => {
    setEmail(value)
    console.log(value)
  };

  const handleInputPassword = (name, value) => {
    setPassword(value)
    console.log(value)
  };

  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={12}>
        <Form
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label='email'>
            <CustomInput
              className={styles.item}
              placeholder='email'
              name='email'
              value={email}
              type='email'
              error='Debe ingresar un email válido'
              callback={handleInputEmail}
            />
          </Form.Item>

          <Form.Item label='password'>
            <CustomInput
              className={styles.item}
              placeholder='password'
              name='password'
              value={password}
              error='Debe ingresar su password'
              callback={handleInputPassword}
            />
          </Form.Item>
          <Row xs={24} sm={24} md={24} lg={24}>
            <Col className='bottonR' span={12} push={11}>
              <Form.Item>
                <Button type='primary' htmlType='submit'>
                  Ingresar
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col span={14} push={3} xs={0} sm={0} md={0} lg={12} />
    </Row>
  )
}

export default LogIn
