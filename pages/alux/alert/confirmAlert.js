import React, { useEffect, useState } from 'react'
import CartelPetAlert from '../../../components/cartelPetAlet'
import Layout from '../../../components/Layout'
import BtnForm from '../../../components/BtnForm'
// ant-d
import { Spin, Row, Col } from 'antd'
// services
import { getPetIdService, updatePetService } from '../../../services'

export default function ConfirmAlert() {
  const [petInfo, setPetInfo] = useState(null)

  async function getDataId() {
    console.log('funcion')
    const token = localStorage.getItem('token')
    const petId = localStorage.getItem('petId')
    if (petId && token) {
      try {
        const { data } = await getPetIdService(token, petId)

        setPetInfo(data)
        console.log(data)

        console.log('estado', petInfo)
      } catch (e) {
        console.log(e)
      }
    }
  }

  useEffect(() => {
    getDataId()
  }, [])

  const handleUpdateStatus = () => {
    console.log('hola')
  }
  return (
    <>
      {!petInfo && (
        <Layout title='Mascota perdida' typeHeader='alert'>
          <Row justify='center'>
            <Col xs={22} md={20} lg={20}>
              <div>
                <Spin size='large' tip='Cargando ' />
              </div>
            </Col>
          </Row>
        </Layout>
      )}
      {petInfo && (
        <Layout title={` Cartel de ${petInfo.pet.name}  `} typeHeader='alert'>
          <Row justify='center'>
            <Col xs={22} md={22} lg={22}>
              <CartelPetAlert
                image='/perritoNegro.png'
                namePet={petInfo.pet.name}
                date='23/09/19'
                sex={petInfo.pet.sex}
                lugar={petInfo.pet.address.street}
                zice={petInfo.pet.size}
                especie={petInfo.pet.species}
                señasParticulares={petInfo.pet.particularSigns}
                color={petInfo.pet.color}
                raza={petInfo.pet.breed}
                contact={petInfo.pet.owner.phoneNumber}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <button onClick={handleUpdateStatus}> click</button>
              </div>
            </Col>
          </Row>
        </Layout>
      )}
    </>
  )
}
