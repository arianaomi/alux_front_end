import React, { useEffect, useState } from 'react'
// components
import Layout from '../../../components/Layout'
import Arrow from '../../../components/ArrowBack'
// ant-d
import { Spin, Row, Col } from 'antd'
import { getPetIdService, updatePetService } from '../../../services'
// scss
import styles from '../../../styles/alux/adoption/_confirmAdoption.module.scss'

// ? Download
import dynamic from 'next/dynamic'
const DownloadAdoption = dynamic(
  () => import('../../../components/DownLoadAdoption'),
  {
    ssr: false,
  }
)

export default function ConfirmAdoption() {
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
      // isMissing", "
      const response = await updatePetService(
        {
          status: 'isAvailableForAdoption',
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
        <Layout title='Adopta a un amigo' typeHeader='adoption'>
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
        <Layout title={` Adopta a ${petInfo.pet.name}  `} typeHeader='adoption'>
          <Row justify='center'>
            <Col xs={22} lg={22}>
              <Arrow
                typeArrow='adoption'
                link='/alux/adoption/confirmAdoption'
              />
            </Col>
            <Col xs={22} md={22} lg={22}>
              <DownloadAdoption data={petInfo} />
            </Col>
          </Row>
          <Row justify='center'>
            <Col xs={22} md={22} lg={22}>
              <div className={styles.contBnt}>
                <button className={styles.btn} onClick={handleUpdateStatus}>
                  Confirmar adopción
                </button>
              </div>
            </Col>
          </Row>
        </Layout>
      )}
    </>
  )
}
