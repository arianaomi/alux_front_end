import React, { useState } from 'react'

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

  function handleForm1 ({ name, species, breed }) {
    setName(name)
    setSpecies(species)
    setBreed(breed)
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
  async function handleForm4 ({ address }) {
    setAddress(address)
    console.log(name, species, breed, color, birthDate, size, sex, particularSigns, medicalInformation, address)
    const pet = { name, species, breed, color, birthDate, size, sex, particularSigns, medicalInformation, address }
    try {
      const response = await addPetService(pet)
      console.log(response)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <LayoutCurve title='Tu mascota'>
        <Row justify='center'>
          <Col xs={10} md={12} lg={12}>
            <PetForm1 callback={handleForm1} />
            <div style='display: none'>
              <PetForm2 callback={handleForm2} />
            </div>
            <div style='display: none'>
              <PetForm3 callback={handleForm3} />
            </div>
            <div style='display: none'>
              <AddressForm callback={handleForm4} />
            </div>
          </Col>
          <Footer />
        </Row>
      </LayoutCurve>
    </>
  )
}
