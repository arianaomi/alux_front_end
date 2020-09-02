import React, { useState } from 'react'
import { Form, Select, Radio } from 'antd'
import BtnForm from '../../BtnForm'

// CSS
import styles from './PetForm2.module.scss'

const { Option } = Select

function PetForm2({ callback }) {
  // States
  const [color, setColor] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [size, setSize] = useState('')
  /**/
  const [sex, setSex] = useState('')

  // Default form functions
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = values => {
    console.log('Received values of form: ', values)
    callback(values)
  }

  // Handlers
  const onChangeColor = value => {
    setColor(value)
    console.log(value)
  }
  const onChangeDate = (value) => {
    console.log(value)
    // setBirthDate(value)
    // console.log(birthDate)
  }

  const onChangeSize = value => {
    setSize(value)
    console.log(value)
  }
  const onChangeSex = value => {
    setSex(value)
    console.log(value)
  }

  return (
    <Form
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className={styles.container}
    >
      <Form.Item className='item' name='color' label='Color'>
        <Select
          className={styles.itemSelect1}
          placeholder='Por favor seleccione el color de su mascota'
          onChange={onChangeColor}
          allowClear
        >
          <Option value='White'>Blanco</Option>
          <Option value='Black'>Negro</Option>
          <Option value='Gray'>Gris</Option>
          <Option value='orange'>Naranja</Option>
          <Option value='Purple'>Morado</Option>
          <Option value='Blue'>Azul</Option>
          <Option value='Green'>Verde</Option>
          <Option value='Beige'>Beige</Option>
          <Option value='Yellow'>Amarillo</Option>
          <Option value='Red'>Rojo</Option>
          <Option value='Multicolor'>Multicolor</Option>
          <Option value='Other'>Otro</Option>
        </Select>
      </Form.Item>

      <Form.Item label='Fecha de nacimiento' className='item'>
        <input type='date' className='item' onChange={onChangeDate} />
      </Form.Item>

      <Form.Item className='item' name='size' label='Tamaño'>
        <Select
          className={styles.itemSelect}
          placeholder='Por favor seleccione el tamaño de su mascota'
          onChange={onChangeSize}
          allowClear
        >
          <Option value='Mini'>Mini</Option>
          <Option value='Small'>Pequeño</Option>
          <Option value='Medium'>Mediano</Option>
          <Option value='Big'>Grande</Option>
          <Option value='Jumbo'>Jumbo</Option>
        </Select>
      </Form.Item>
      <div className={styles.wrapperCal_gender}>
        <Form.Item label='Fecha de nacimiento' className={styles.calendar}>
          <DatePicker
            className={styles.itemSelect3}
            onChange={onChangeDate}
            picker='month'
          />
        </Form.Item>
        <Form.Item className='item' name='sex' label='Sexo'>
          <Radio.Group
            onChange={onChangeSex}
            optionType='button'
            buttonStyle='solid'
            className={styles.itemSelect2}
          >
            <Radio.Button value='female'>Hembra</Radio.Button>
            <Radio.Button value='male'>Macho</Radio.Button>
            <Radio.Button value='unknown'>Desconocido</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </div>

      <div className={styles.btn}>
        <Form.Item>
          <BtnForm content='Siguiente' typeBtn='btn_primary' />
        </Form.Item>
      </div>
    </Form>
  )
}

export default PetForm2
