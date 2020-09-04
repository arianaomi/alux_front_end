import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { getPostsService, getPetsService } from '../../../services'
import { Row, Col, Carousel } from 'antd'

import CardAdoption from '../../../components/cardAdoption'
import CardLost from '../../../components/cardLost'
import CardPost from '../../../components/cardGeneralXL'

import styles from '../../../styles/alux/home/_home.module.scss'

export default function Home() {
  const [pet, setPets] = useState(null)
  const [petLost, setPetLost] = useState([])
  const [petAdoption, setPetAdoption] = useState([])
  const [post, setPost] = useState([])

  async function getDataId() {
    console.log('funcion')
    const token = localStorage.getItem('token')

    if (token) {
      try {
        const response = await getPetsService(token)

        const petsLost = response.data.filter(pet => pet.status === 'isMissing')
        const petsAdoption = response.data
          .filter(pet => pet.status === 'isAvailableForAdoption')
          .slice(0, 2)
        setPetLost(petsLost)
        setPetAdoption(petsAdoption)

        const { data } = await getPostsService()
        const entries = data.entries
        // console.log(entries)
        setPost(entries)

        console.log(post)
      } catch (e) {
        console.log(e)
      }
    }
  }

  useEffect(() => {
    getDataId()
  }, [])

  const UICardsAdoption = petAdoption.map(
    ({ name, _id, address, character, imageurl }) => (
      <Col xs={22} md={11} lg={11} className={styles.adoption} key={_id}>
        <CardAdoption
          namePet={name}
          place={address.street}
          info={character[0]}
          image={imageurl}
        />
      </Col>
    )
  )
  const UICardsLost = petLost.map(({ name, _id, address, updatedAt, imageurl }) => (
    <div key={_id}>
      <CardLost namePet={name} place={address.street} date={updatedAt} image={imageurl} />
    </div>
  ))

  const UICardsPost = post.map(({ title, imageurl, user, content, _id }) => (
    <Col xs={22} md={10} lg={10} className={styles.post} key={_id}>
      <CardPost
        title={title}
        image={imageurl}
        namePet={user.name}
        text={content.slice(0, 100)}
      />
    </Col>
  ))

  return (
    <Layout>
      <Row justify='center'>
        <h1 className={styles.TitleAlert}>¡Ayúdame a volver a casa!</h1>
        <Col xs={22} md={22} lg={20}>
          <Carousel autoplay>{UICardsLost}</Carousel>
        </Col>
      </Row>
      <Row justify='center'>

        <h2 className={styles.TitleAdopt}>Adopta un amigo</h2>
        <Col xs={22} md={22} lg={20}>
          <div containerAdopt>
            {UICardsAdoption}
          </div>
        </Col>

      </Row>
      <Row justify='center'>
        {UICardsPost}
      </Row>
    </Layout>
  )
}
