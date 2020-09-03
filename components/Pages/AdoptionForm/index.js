import React, { useState } from 'react'
import { Form, Select, Radio } from 'antd'
import styles from './AdoptionForm.module.scss'
import BtnForm from '../../BtnForm'

const { Option } = Select

function AdoptionForm({ callback }) {
  const [temperament, setTemperament] = useState('')
  const [liveWith, setLiveWith] = useState('')
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = values => {
    // console.log('Received values of form: ', values)
    callback(values)
  }

  return (
    <Form
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className={styles.container}
    >
      <Form.Item className='item' name='temperament' label='Temperamento'>
        <Select
          className={styles.itemSelect1}
          placeholder='Por favor seleccione una opción'
          // onChange={onChangeTemperament}
          allowClear
        >
          <Option value='Amoroso'>Amoroso</Option>
          <Option value='Agresivo'>Agresivo</Option>
          <Option value='Cariñoso'>Cariñoso</Option>
          <Option value='Dormilon'>Dormilon</Option>
          <Option value='Activo'>Activo</Option>
          <Option value='Tranquilo'>Tranquilo</Option>
          <Option value='Otro'>Otro</Option>
        </Select>
      </Form.Item>

      <Form.Item className='item' name='liveWith' label='Convive con'>
        <Select
          className={styles.itemSelect}
          placeholder='Por favor seleccione una opción'
          // onChange={onChangeSize}
          allowClear
        >
          <Option value='Niños'>Niños</Option>
          <Option value='Gatos'>Gatos</Option>
          <Option value='Perros'>Perros</Option>
          <Option value='Es amigable con todos  '>Es amigable con todos</Option>
          <Option value='Ninguno'>Ninguno</Option>
          <Option value='Otros'>Otros animales</Option>
        </Select>
      </Form.Item>

      <div className={styles.btn}>
        <Form.Item>
          <BtnForm content='Siguiente' typeBtn='btn_adoption' />
        </Form.Item>
      </div>
    </Form>
  )
}

export default AdoptionForm
