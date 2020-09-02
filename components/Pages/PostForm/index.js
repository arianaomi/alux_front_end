import React, { useState } from 'react'
import { Form, Input } from 'antd'
import CustomInput from '../../Input'
import TextArea from 'antd/lib/input/TextArea'
import BtnForm from '../../BtnForm'

import styles from './PostForm.module.scss'

export default function PostForm ({ callback }) {
  // States
  const [img, setImageUrl] = useState('')
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [content, setContent] = useState('')

  // Default form functions
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    const createdAt = new Date()
    values = { ...values, createdAt }
    console.log('Received values of form with date: ', values)
    callback(values)
  }

  // Handlers
  const handleInputImage = (name, value) => {
    setImageUrl(value)
    console.log(value)
  }

  const handleInputTitle = (name, value) => {
    setTitle(value)
    console.log(value)
  }
  // const handleInputUser = (name, value) => {
  //   setUser(value)
  //   console.log(value)
  // }
  const handleInputContent = (name, value) => {
    setContent(value)
    console.log(value)
  }
  const handleInputTags = (name, value) => {
    setTags(value)
    console.log(value)
  }

  return (

    <div lassName={styles.ContainerFormPost}>
      <Form
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label='Imagen'>
          <Input
            type='file'
            name='img'
            value={img}
            error='Debe ingresar una imagen'
            callback={handleInputImage}
          />
        </Form.Item>

        <Form.Item label='title'>
          <CustomInput
            placeholder='Title'
            name='title'
            value={title}
            error='Debe ingresar el título del Post'
            callback={handleInputTitle}
          />
        </Form.Item>

        <Form.Item label='Etiquetas'>
          <CustomInput
            className={styles.item}
            placeholder='Etiquetas'
            name='tags'
            value={tags}
            error='Debe ingresar una o varias etiquetas relacionadas al post'
            callback={handleInputTags}
          />
        </Form.Item>

        <Form.Item
          label='Contenido'
          className={styles.item}
          placeholder='Contenido del post'
          name='content'
          value={content}
          error='Debe ingresar el texto del post'
          callback={handleInputContent}
        >
          <TextArea />
        </Form.Item>
        <Form.Item>
          <div lassName={styles.BtnItm}>
            <BtnForm content='Publicar' typeBtn='btn_primary' />
          </div>
        </Form.Item>
      </Form>
    </div>

  )
}
