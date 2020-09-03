import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import AdoptionForm from '../../../components/Pages/AdoptionForm'
import Arrow from '../../../components/ArrowBack'
// ant-design
import { Row, Col } from 'antd'
// services
import { updatePetService } from '../../../services'

export default function ConfirmAdoption() {
  const router = useRouter()
  const [token, setToken] = useState('')
  const [petId, setPetId] = useState('')

  useEffect(() => {
    const tokenn = localStorage.getItem('token')
    setToken(tokenn)
    const pet = localStorage.getItem('petId')
    setPetId(pet)
    // console.log(pet)
  }, [])

  async function handleAdoption({ temperament, liveWith }) {
    console.log(temperament, liveWith)
    const character = [temperament, liveWith]
    console.log(character)
    try {
      const response = await updatePetService({ character }, token, petId)
      console.log(response)

      console.log(response)
      router.push('/alux/adoption/Adoption')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout title='Levantar adopción' typeHeader='adoption'>
      <Row justify='center'>
        <Col xs={22} lg={22}>
          <Arrow typeArrow='adoption' link='/alux/home' />
        </Col>
        <Col xs={22} md={22} lg={22}>
          <AdoptionForm callback={handleAdoption} />
        </Col>
      </Row>
    </Layout>
  )
}
