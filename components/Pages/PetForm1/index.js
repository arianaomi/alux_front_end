import React, { useState } from 'react'
import { Form, Select } from 'antd'
import CustomInput from '../../Input'
import Btn from '../../Btn'
import CustomUpload from '../../CustomUpload'

// CSS
import styles from './PetForm.module.scss'

const { Option } = Select

function PetForm1() {
  const objectBreedOptions = {
    Dog: ['Mestizo/ Sin raza', 'Beagle', 'Boxer', 'Bulldog', 'Chihuahua', 'Husky Siberiano', 'Jack Russell Terrier', 'Pastor alemán', 'Poodle', 'Pug', 'Shnauzer', 'Yorkie', 'Xoloescuincle', 'Otro'],
    Cat: ['Mestizo/ Sin raza', 'Maltés', 'Siamés', 'Angora', 'Egipcio', 'Persa', 'Siberiano', 'Otra/ No disponible'],
    Mouse: ['Conejo', 'Cuyo', 'Hurón', 'Hamster', 'Ratón', 'Gerbo', 'Rata', 'Otro/ No disponible'],
    Bird: ['Canario', 'Jilguero', 'Loro', 'Periquito', 'Guacamayo', 'Paloma', 'Cotorro', 'Ruiseñor', 'Paloma', 'Cotorro', 'Ruiseñor', 'Pollo', 'Otra/ No disponible'],
    Other: ['Aracnido', 'Iguana', 'Tortuga', 'Otro reptil', 'Rana', 'Erizo', 'Otro/ No disponible'],
    Farm: ['Burro', 'Caballo/Yegua', 'Mula', 'Pato', 'Borrego', 'Cabra/Chivo', 'Cerdo', 'Otro/ No disponible']
  }

  // States
  const [name, setName] = useState('')
  const [species, setSpecies] = useState('')
  const [breed, setBreed] = useState(objectBreedOptions)

  // Default form functions
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    // acá ir al siguiente componente
  }
  const handleInputName = (name, value) => {
    setName(value)
    console.log(value)
  }

  // Handlers
  const onChangeSpecies = (value) => {
    console.log(value)
    setSpecies(value)
  }

  // handleSelectChange(event) {
  //   console.log(event.target.value)
  //   let selectedAnimal = event.target.value
  //   this.setState({ selectedAnimal })
  // }

  const onChangeBreed = (name, value) => {
    setBreed(value)
    console.log(value)
  }

  return (

    <Form
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >

      <CustomUpload />

      <Form.Item label='Nombre'>
        <CustomInput
          className={styles.item}
          name='name'
          value={name}
          type='text'
          error='Debe ingresar un nombre'
          callback={handleInputName}
        />
      </Form.Item>

      <Form.Item
        name='species'
        label='Especie'
      >
        <Select
          className={styles.itemSelector}
          placeholder='Por favor seleccione la especie a la que pertenece su mascota'
          onChange={onChangeSpecies}
          allowClear
        >
          <Option value='Dog'>Perro</Option>
          <Option value='Cat'>Gato</Option>
          <Option value='Mouse'>Roedor</Option>
          <Option value='Bird'>Ave</Option>
          <Option value='Farm'>Animal de granja</Option>
          <Option value='Other'>Otro</Option>
        </Select>
      </Form.Item>

      {species ? (<Form.Item
        name='breed'
        label='Raza o Variedad'
        rules={[{ required: true }]}
      >
        <Select
          className={styles.itemSelector}
          placeholder='Por favor seleccione la especie a la que pertenece su mascota'
          onChange={onChangeBreed}
          allowClear
        >
          {
            breed[species].map(option => {
              return <Option value='{option}'> {option} </Option>
            })
          }
        </Select>
      </Form.Item>) : null}

      <Form.Item>
        <Btn content='Siguiente' typeBtn='btn_primary' link='/' />
      </Form.Item>
    </Form>)
}

export default PetForm1
