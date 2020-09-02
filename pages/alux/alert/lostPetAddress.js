import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// components
import Layout from '../../../components/Layout'
import AlertForm from '../../../components/Pages/AlertForm'
import Arrow from '../../../components/ArrowBack'
// ant-d
import { Row, Col } from 'antd'
// services
import {
  getPetIdService,
  updateUsersService,
  updatePetService
} from '../../../services'

// ToDo: style
export default function LostPetAddress () {
  const router = useRouter()
  const [token, setToken] = useState('')
  const [owner, setOwner] = useState('')
  const [pet, setPet] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token)
    // console.log(token)
    const owner = localStorage.getItem('userId')
    setOwner(owner)
    // console.log(owner)
    const pet = localStorage.getItem('petId')
    setPet(pet)
    // console.log(pet)

    getPetIdService(token, pet)
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  async function handleUpdate ({
    street,
    number,
    block,
    zipCode,
    phoneNumber,
    date
  }) {
    console.log(phoneNumber)
    const address = {
      street,
      number,
      block,
      zipCode
    }

    const data = {
      address,
      date
    }

    // console.log(address)
    // console.log('token', token)
    // console.log('owner', owner)
    // console.log(phoneNumber)
    try {
      const response = await updateUsersService({ phoneNumber }, token, owner)
      console.log(response)
      const responsePet = await updatePetService(data, token, pet)
      console.log(responsePet)
      router.push('/alux/alert/confirmAlert')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout title='¿Donde se perdio?' typeHeader='alert'>
      <Row justify='center'>
        <Col xs={22} lg={22}>
          <Arrow typeArrow='alert' link='/alux/home' />
        </Col>
        <Col xs={22} md={22} lg={22}>
          <AlertForm callback={handleUpdate} />
        </Col>
      </Row>
    </Layout>
  )
}
