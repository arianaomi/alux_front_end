import React, { useState } from 'react'
import { Form } from 'antd'
import CustomInput from '../../Input'
import TextArea from 'antd/lib/input/TextArea'
import styles from './PostForm.module.scss'
import BtnForm from '../../BtnForm'

export default function PostForm ({ callback }) {
  // States
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [content, setContent] = useState('')

  // Default form functions
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = (values) => {
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

      <Form.Item label='Título'>
        <CustomInput
          placeholder='Title'
          name='title'
          value={title}
          error='Debe ingresar el título del Post'
        />
      </Form.Item>

      <Form.Item label='Etiquetas'>
        <CustomInput
          className={styles.item}
          placeholder='Etiquetas'
          name='tags'
          value={tags}
          error='Debe ingresar una o varias etiquetas relacionadas al post'
        />
      </Form.Item>

      <Form.Item
        label='Contenido'
        className={styles.item}
        placeholder='Contenido del post'
        name='content'
        value={content}
        error='Debe ingresar el texto del post'
      >
        <TextArea />
      </Form.Item>

      <Form.Item>
        <BtnForm content='Publicar' typeBtn='btn_primary' />
      </Form.Item>
    </Form>
  )
}
