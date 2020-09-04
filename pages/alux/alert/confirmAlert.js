import React, { useEffect, useState } from 'react'
// components
import Layout from '../../../components/Layout'
import Btn from '../../../components/Btn'
import Arrow from '../../../components/ArrowBack'
// ant-d
import { Spin, Row, Col } from 'antd'
// services
import { getPetIdService, updatePetService } from '../../../services'
// scss
import styles from '../../../styles/alux/alert/_confirmAlert.module.scss'

// ? Download
import dynamic from 'next/dynamic'
const DownloadCartel = dynamic(
  () => import('../../../components/DownLoadCartel'),
  {
    ssr: false
  }
)

export default function ConfirmAlert () {
  const [petInfo, setPetInfo] = useState(null)
  const [tokenId, setTokenID] = useState('')

  async function getDataId () {
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
          status: 'isMissing'
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
            <Col xs={22} lg={22}>
              <Arrow typeArrow='alert' link='/alux/alert/lostPetAddress' />
            </Col>
            <Col xs={22} md={22} lg={22}>
              <DownloadCartel data={petInfo} />
            </Col>
          </Row>

          <div className={styles.contBnt}>
            <div className={styles.BntSin}>
              <button className={styles.btn} onClick={handleUpdateStatus}>
                Confirmar Alerta
              </button>
            </div>
          </div>
        </Layout>
      )}
    </>
  )
}
