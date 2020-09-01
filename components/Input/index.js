import React from 'react'

// Ant Design
import { Form, Input } from 'antd'
import styles from './Input.module.scss'

const CustomInput = (props) => {
  const { type, name, value, placeholder, error } = props
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
      />
    </Form.Item>
  )
}

export default CustomInput
