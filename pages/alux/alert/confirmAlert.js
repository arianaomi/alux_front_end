import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import CartelPetAlert from '../../../components/cartelPetAlet'
import Layout from '../../../components/Layout'
import BtnForm from '../../../components/BtnForm'
// ant-d
import { Spin, Row, Col } from 'antd'
// services
import { getPetIdService, updatePetService } from '../../../services'
// scss
import styles from '../../../styles/alert/_confirmAlert.module.scss'

// ? Download
const DownloadCartel = dynamic(
  () => import('../../../components/DownLoadCartel'),
  {
    ssr: false,
  }
)

export default function ConfirmAlert() {
  const [petInfo, setPetInfo] = useState(null)
  const [tokenId, setTokenID] = useState('')

  async function getDataId() {
    console.log('funcion')
    const token = localStorage.getItem('token')
    setTokenID(token)
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

  const handleUpdateStatus = async () => {
    console.log('hola')
    const id = petInfo.pet._id
    console.log(id)
    try {
      // isMissing", "isAvailableForAdoption
      const response = await updatePetService(
        {
          status: 'isMissing',
        },
        tokenId,
        id
      )
      console.log(response)
    } catch (error) {
      console.error(error)
    }
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
              <DownloadCartel
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
                <Link href='/alux/alert/lostPetAddress'>
                  <a>Regresar</a>
                </Link>
                <button className={styles.btn} onClick={handleUpdateStatus}>
                  Confirmar Alerta
                </button>
              </div>
            </Col>
          </Row>
        </Layout>
      )}
    </>
  )
}
