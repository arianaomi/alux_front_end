import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// ant-design
import { Row, Col, Modal, Button } from 'antd'
// components
import PetForm1 from '../../../components/Pages/PetForm1'
import PetForm2 from '../../../components/Pages/PetForm2'
import PetForm3 from '../../../components/Pages/PetForm3'
import AddressForm from '../../../components/Pages/AddressForm'
import LayoutCurve from '../../../components/LayoutCurve'
import Footer from '../../../components/Footer'
import { addPetService } from '../../../services'

import InputFile from '../../../components/InputFile'

// import PreviewCircle from '../../../components/PreviewCircle'
import styles from '../../../styles/alux/Registry/formPet-1/_formPet-1.module.scss'
// import { CloseOutlined } from '@ant-design/icons'

export default function FormPet1 () {
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
  const [imageurl, setImageurl] = useState('')
  const [activeForm, setActiveForm] = useState(0)
  const [about, setAbout] = useState('')

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

  useEffect(() => {
    if (imageurl) {
      Modal.success({
        content: 'La imagen se guardó exitosamente'
      })
    }
  }, [imageurl])

  function handleFile (url) {
    setImageurl(url)
  }

  function handleForm1 ({ name, about, species, breed }) {
    setName(name)
    setSpecies(species)
    setBreed(breed)
    setAbout(about)
    setActiveForm(1)
  }

  function handleForm2 ({ color, birthDate, size, sex }) {
    setColor(color)
    setBirthDate(birthDate)
    setSize(size)
    setSex(sex)
    setActiveForm(2)
  }

  function handleForm3 ({ particularSigns, medicalInformation }) {
    setParticularSigns(particularSigns)
    setMedicalInformation(medicalInformation)
    setActiveForm(3)
  }

  async function handleForm4 (addressObj) {
    setAddress(addressObj)
    console.log(address)
    const pet = {
      owner,
      imageurl,
      name,
      species,
      breed,
      color,
      birthDate,
      size,
      sex,
      particularSigns,
      medicalInformation,
      address,
      about
    }
    console.log(pet)
    try {
      const response = await addPetService(pet, token)
      console.log(response)
      const petId = response.data.newPet._id
      console.log(petId)
      localStorage.setItem('petId', petId)
      Router.push(`/alux/CodeQR/${petId}`)
    } catch (error) {
      console.log('error', error)
    }
  }
  // console.warn(activeForm)

  return (
    <>
      <LayoutCurve title='Registro de mascota'>
        <Row justify='center' className={styles.wrapperForms}>
          <Col xs={22} md={22} lg={15}>
            <div className={activeForm === 0 ? styles.d_block : styles.d_none}>
              <div className={styles.form1}>
                <div className={styles.AgrGImg}>
                  <InputFile callback={handleFile} />
                </div>
                <PetForm1 callback={handleForm1} />
              </div>
              <div className={styles.cat}>
                <img className={styles.catCi} src='/catWF.png' />
              </div>
            </div>
            <div className={styles.formDos}>
              <div
                className={activeForm === 1 ? styles.d_block : styles.d_none}
              >
                <div className={styles.img}>
                  <img src='/pajaritoForPetDos.png' />
                  <PetForm2 callback={handleForm2} />
                  <div className={styles.imgEr}>
                    <img src='/ErizoAni.png' className={styles.erizo} />
                  </div>
                </div>
              </div>
            </div>
            <div className={activeForm === 2 ? styles.d_block : styles.d_none}>
              <div className={styles.form3}>
                {' '}
                <img src='/cobayo.png' className={styles.cobayo} />
                <PetForm3 callback={handleForm3} />
              </div>
            </div>

            <div className={activeForm === 3 ? styles.d_block : styles.d_none}>
              <div className={styles.form4}>
                <div className={styles.wrapperImg}>
                  <h2>Dirección</h2> <img src='/PezFormPetTres.png' />
                </div>
                <div className={styles.formCuat}>
                  <AddressForm callback={handleForm4} />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <div className={styles.footerR}>
              <Footer />
            </div>
          </Col>
        </Row>
      </LayoutCurve>
    </>
  )
}
