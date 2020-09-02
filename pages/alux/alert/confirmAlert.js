import React, { useEffect, useState } from 'react'
import CartelPetAlert from '../../../components/cartelPetAlet'
import Layout from '../../../components/Layout'
// ant-d
import { Row, Col } from 'antd'
// services
import { getPetIdService } from '../../../services'

export default function ConfirmAlert() {
  const [token, setToken] = useState('')
  const [petId, setPetId] = useState('')
  const [pet, setPet] = useState('')

  useEffect(() => {
    const tokenn = localStorage.getItem('token')
    setToken(tokenn)
    // console.log(token)
    const petID = localStorage.getItem('petId')
    setPetId(petID)
    // console.log(petId)
    // console.log('hola')

    // getPetIdService(token, petId)
    //   .then(data => {
    //     //console.log(data)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }, [])

  useEffect(() => {
    if (petId) {
      ;async () => {
        try {
          const { data } = await getPetIdService(token, petId)
          console.log(data)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }, [])

  return (
    <Layout title={` Cartel de ${pet.name} `} typeHeader='alert'>
      <Row justify='center'>
        <Col xs={22} md={22} lg={22}>
          {/* <CartelPetAlert
            image='/perritoNegro.png'
            namePet={pet.name}
            date='23/09/19'
            sex={pet.sex}
            lugar=''
            zice={pet.size}
            especie={pet.species}
            señasParticulares={pet.particularSigns}
            color={pet.color}
            raza={pet.breed}
            contact={pet.owner.email}
          /> */}
        </Col>
      </Row>
    </Layout>
  )
}
