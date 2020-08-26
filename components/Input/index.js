import React from 'react';

// Ant Design
import { Form, Input } from 'antd';
import { FormOutlined } from '@ant-design/icons';

const CustomInput = (props) => {
  const { type, name, value, placeholder, error, callback } = props

  const handlerInput = ({ target: { value, name } }) => {
    callback(name, value)
  };

  return (
    <Form.Item
      className='form-item'
      name={name}
      rules={[{ required: true, message: error }]}
    >
      <Input
        style={{ width: 300 }}
        prefix={<FormOutlined />}
        placeholder={placeholder}
        type={type || 'text'}
        name={name}
        value={value}
        onChange={handlerInput}
      />
    </Form.Item>
  )
};

export default CustomInput
