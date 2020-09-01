import React, { useState, useEffect } from 'react'

// ant-design
import { Row, Col } from 'antd'
// components
import PetForm1 from '../../../components/Pages/PetForm1'
import PetForm2 from '../../../components/Pages/PetForm2'
import PetForm3 from '../../../components/Pages/PetForm3'
import AddressForm from '../../../components/Pages/AddressForm'
import Btn from '../../../components/Btn'
import LayoutCurve from '../../../components/LayoutCurve'
import Footer from '../../../components/Footer'
import { addPetService } from '../../../services'

import styles from './formPet1.module.scss'

export default function FormPet1 () {
  const [name, setName] = useState('')
  const [species, setSpecies] = useState('')
  const [breed, setBreed] = useState('')
  const [color, setColor] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [size, setSize] = useState('')
  const [sex, setSex] = useState('')
  const [particularSigns, setParticularSigns] = useState('')
  const [medicalInformation, setMedicalInformation] = useState('')
  const [address, setAddress] = useState('')
  const [showFirstForm, setShowFirstForm] = useState(true)
  const [showSecondForm, setShowSecondForm] = useState(false)
  const [showThirdForm, setShowThirdForm] = useState(false)
  const [showLastForm, setShowLastForm] = useState(false)
  const [token, setToken] = useState('')
  const [owner, setOwner] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)
    setToken(token)
    const owner = localStorage.getItem('userId')
    console.log(owner)
    setOwner(owner)
  }, [])

  function handleForm1 ({ name, species, breed }) {
    setName(name)
    setSpecies(species)
    setBreed(breed)
    setShowFirst(!showFirst)
    setShowSecond(true)
  }

  function handleForm2 ({ color, birthDate, size, sex }) {
    setColor(color)
    setBirthDate(birthDate)
    setSize(size)
    setSex(sex)
  }

  function handleForm3 ({ particularSigns, medicalInformation }) {
    setParticularSigns(particularSigns)
    setMedicalInformation(medicalInformation)
  }
  //! idPet harcodeado
  //  const idPet = '5f4c1549aea180148c144429'

  async function handleForm4 ({ address }) {
    setAddress(address)
    const pet = { owner, name, species, breed, color, birthDate, size, sex, particularSigns, medicalInformation, address }
    console.log(pet)
    try {
      const response = await addPetService(pet, token)
      console.log(response)
      const petId = response.data.newPet._id
      console.log(petId)
      Router.push('alux/CodeQR/${petId}')
    } catch (error) {
      console.log('error', error)
    }
  }

  const classNameShow = showFirstForm ? 'styles.d-block' : 'styles.d-none'
  const classNameShowSecond = showSecondForm ? 'styles.d-block' : 'styles.d-none'
  const classNameShowThird = showThirdForm ? 'styles.d-block' : 'styles.d-none'
  const classNameShowLast = showLastForm ? 'styles.d-block' : 'styles.d-none'

  return (
    <>
      <LayoutCurve title='Tu mascota'>
        <Row justify='center'>
          <Col xs={10} md={12} lg={12}>
            <PetForm1 className={classNameShow} callback={handleForm1} />
            <div>
              <PetForm2 className={classNameShowSecond} callback={handleForm2} />
            </div>
            <div>
              <PetForm3 className={classNameShowThird} callback={handleForm3} />
            </div>
            <div>
              <AddressForm className={classNameShowLast} callback={handleForm4} />
            </div>
          </Col>
        </Row>
        <Footer />
      </LayoutCurve>
    </>
  )
}
