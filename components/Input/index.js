import React from 'react'

// Ant Design
import { Form, Input } from 'antd'
import styles from './Input.module.scss'

const CustomInput = (props) => {
  const { type, name, value, placeholder, error, callback } = props

  const handlerInput = ({ value, name }) => {
    callback(name, value)
  }

  return (
    <Form.Item
      className='form-item'
      name={name}
      rules={[{ required: true, message: error }]}
    >
      <Input
        className={styles.item}
        placeholder={placeholder}
        type={type || 'text'}
        name={name}
        value={value}
        onChange={handlerInput}
      />
    </Form.Item>
  )
}

export default CustomInput
