import React, { useState } from 'react';
import { Form, Select } from 'antd';
import CustomInput from '../../Input';
import Btn from '../../Btn';
import CustomUpload from '../../CustomUpload';

// SCSS
<<<<<<< HEAD
import styles from './PetForm1.module.scss'
=======
import styles from './PetForm.module.scss';
>>>>>>> develop

const { Option } = Select

const objectBreedOptions = {
  Dog: [
    'Mestizo/ Sin raza',
    'Beagle',
    'Boxer',
    'Bulldog',
    'Chihuahua',
    'Husky Siberiano',
    'Jack Russell Terrier',
    'Pastor alemán',
    'Poodle',
    'Pug',
    'Shnauzer',
    'Yorkie',
    'Xoloescuincle',
    'Otro'
  ],
  Cat: [
    'Mestizo/ Sin raza',
    'Maltés',
    'Siamés',
    'Angora',
    'Egipcio',
    'Persa',
    'Siberiano',
    'Otra/ No disponible'
  ],
  Mouse: [
    'Conejo',
    'Cuyo',
    'Hurón',
    'Hamster',
    'Ratón',
    'Gerbo',
    'Rata',
    'Otro/ No disponible'
  ],
  Bird: [
    'Canario',
    'Jilguero',
    'Loro',
    'Periquito',
    'Guacamayo',
    'Paloma',
    'Cotorro',
    'Ruiseñor',
    'Paloma',
    'Cotorro',
    'Ruiseñor',
    'Pollo',
    'Otra/ No disponible'
  ],
  Other: [
    'Aracnido',
    'Iguana',
    'Tortuga',
    'Otro reptil',
    'Rana',
    'Erizo',
    'Otro/ No disponible'
  ],
  Farm: [
    'Burro',
    'Caballo/Yegua',
    'Mula',
    'Pato',
    'Borrego',
    'Cabra/Chivo',
    'Cerdo',
    'Otro/ No disponible'
  ]
}

function PetForm1({ callback }) {
  // States
  const [name, setName] = useState('')
  const [species, setSpecies] = useState('')
  const [breed, setBreed] = useState('')

  // Default form functions
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = (values) => {
    console.log(values)
    callback(values)
  }

  const handleInputName = (name, value) => {
    setName(value)
    console.log(value)
  };

  // Handlers
  const onChangeSpecies = (value) => {
    console.log(value)
    setSpecies(value)
  };

  const onChangeBreed = (name, value) => {
    setBreed(value)
    console.log(value)
  };

  return (
    <Form
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className={styles.wrapperForm}>
        <div className={styles.upload}>
          <div className='upload'>
            <CustomUpload />
          </div>
        </div>
        <div className={styles.selector}>
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

          <Form.Item name='species' label='Especie'>
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
          {console.log(species, breed)}
          {species ? (
            <Form.Item name='breed' label='Raza' rules={[{ required: true }]}>
              <Select
                className={styles.itemSelector}
                placeholder='Por favor seleccione la especie a la que pertenece su mascota'
                onChange={onChangeBreed}
                allowClear
              >
                {objectBreedOptions[species].map((option, index) => {
                  return (
                    <Option key={index} value={option}>
                      {option}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>
          ) : null}
        </div>
      </div>

      <div className={styles.btn_wrapper}>
        <div className={styles.btn_m}>
          <Btn content='regresar' typeBtn='btn_secondary' link='/signUp' />
        </div>
        <div className={styles.ratonC}>
          <img className={styles.ratonCi} src='/ratonCuerda.png' />
        </div>
        <div className={styles.catC}>
          <img className={styles.catCi} src='/catWF.png' />
        </div>
        <div className={styles.btn_ms}>
          <Form.Item>
            <Btn
              content='Siguiente'
              typeBtn='btn_primary'
              link='/alux/Registry/formPet-2'
            />
          </Form.Item>
        </div>
        <Form.Item>
          <Btn
            content='Siguiente'
            typeBtn='btn_primary'
          />
        </Form.Item>
      </div>
    </Form>
  )
}

export default PetForm1
