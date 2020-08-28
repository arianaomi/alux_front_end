{ /* Si Perro: */ }
  <Form.Item
  name='breed'
  label='Raza / Sin raza'
  rules={[{ required: true }]}
>

  <Select
    className={styles.itemSelector}
    placeholder='Por favor seleccione la raza o variedad a la que pertenece su mascota'
    onChange={onChangeBreed}
    allowClear
  >
    <Option value='No breed'> Mestizo / Sin raza </Option>
    <Option value='cat'> Otra / No disponible  </Option>
    <Option value='mouse'> Beagle </Option>
    <Option value='bird'>Boxer</Option>
    <Option value='reptile'>Bulldog</Option>
    <Option value='fish'>Chihuahua</Option>
    <Option value='No breed'> Yorkie </Option>
    <Option value='cat'> Shnauzer  </Option>
    <Option value='cat'> Husky Siberiano </Option>
    <Option value='mouse'> Pug </Option>
    <Option value='bird'>Poodle</Option>
    <Option value='reptile'>Paster alemán</Option>
    <Option value='fish'>Xoloescuincle</Option>
    <Option value='fish'>Jack Russell Terrier</Option>
  </Select>
</Form.Item>
