import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
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
import Uploader from '../../../components/Uploader'

import styles from './formPet1.module.scss'

export default function FormPet1() {
  const Router = useRouter()
  const [name, setName] = useState('')
  const [species, setSpecies] = useState('')
  const [breed, setBreed] = useState('')
  const [color, setColor] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [size, setSize] = useState('')
  const [sex, setSex] = useState('')
  const [particularSigns, setParticularSigns] = useState('')
  const [medicalInformation, setMedicalInformation] = useState('')
  const [address, setAddress] = useState({})
  const [imgUrl, setImgUrl] = useState('')
  const [activeForm, setActiveForm] = useState(0)

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

  function handleFile(url) {
    setImgUrl(url)
    console.log('url en el estado:', imgUrl)
  }

  function handleForm1({ name, species, breed }) {
    setName(name)
    setSpecies(species)
    setBreed(breed)
    setActiveForm(1)
  }

  function handleForm2({ color, birthDate, size, sex }) {
    setColor(color)
    setBirthDate(birthDate)
    setSize(size)
    setSex(sex)
    setActiveForm(2)
  }

  function handleForm3({ particularSigns, medicalInformation }) {
    setParticularSigns(particularSigns)
    setMedicalInformation(medicalInformation)
    setActiveForm(3)
  }

  async function handleForm4(address) {
    // setAddress(values)
    console.log(address)
    const pet = { owner, name, species, breed, color, birthDate, size, sex, particularSigns, medicalInformation, address }
    console.log(pet)
    //   try {
    //     const response = await addPetService(pet, token)
    //     console.log(response)
    //     const petId = response.data.newPet._id
    //     console.log(petId)
    //     localStorage.setItem('petId', petId)
    //     Router.push(`/alux/CodeQR/${petId}`)
    //   } catch (error) {
    //     console.log('error', error)
    //   }
  }
  // console.warn(activeForm)
  // const classNameShow = showFirstForm ? 'styles.d-block' : 'styles.d-none'
  // const classNameShowSecond = showSecondForm ? 'styles.d-block' : 'styles.d-none'
  // const classNameShowThird = showThirdForm ? 'styles.d-block' : 'styles.d-none'
  // const classNameShowLast = showLastForm ? 'styles.d-block' : 'styles.d-none'

  return (
    <>
      <LayoutCurve title='Tu mascota'>
        <Row justify='center'>
          <Col xs={10} md={12} lg={12}>
            <div className={styles.upload}>
              <Uploader callback={handleFile} />
            </div>
            <div className={(activeForm === 0) ? styles.d_block : styles.d_none}>
              <PetForm1 callback={handleForm1} />
            </div>
            <div className={(activeForm === 1) ? styles.d_block : styles.d_none}>
              <PetForm2 callback={handleForm2} />
            </div>
            <div className={(activeForm === 2) ? styles.d_block : styles.d_none}>
              <PetForm3 callback={handleForm3} />
            </div>
            <div className={(activeForm === 3) ? styles.d_block : styles.d_none}>
              <AddressForm callback={handleForm4} />
            </div>
          </Col>
        </Row>
        <Footer />
      </LayoutCurve>
    </>
  )
}
