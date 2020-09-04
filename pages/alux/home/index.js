import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { getPostsService, getPetsService } from '../../../services'
import { Row, Col, Carousel } from 'antd'

import CardAdoption from '../../../components/cardAdoption'
import CardLost from '../../../components/cardLost'

import styles from '../../../styles/alux/home/_home.module.scss'

export default function Home () {
  const [pet, setPets] = useState(null)
  const [petLost, setPetLost] = useState([])
  const [petAdoption, setPetAdoption] = useState([])

  async function getDataId () {
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
        console.log(petAdoption)
        console.log(petLost)
      } catch (e) {
        console.log(e)
      }
    }
  }

  useEffect(() => {
    getDataId()
  }, [])

  // async function getAllPosts () {
  //   try {
  //     const response = await getPostsService()
  //     console.log(response)
  //   } catch (error) {
  //     console.log('error', error)
  //   }

  const UICardsAdoption = petAdoption.map(
    ({ name, size, _id, address, character }) => (
      <Col xs={22} md={10} lg={10} className={styles.adoption}>
        <CardAdoption
          namePet={name}
          key={_id}
          place={address.street}
          info={character[0]}
        />
      </Col>
    )
  )
  const UICardsLost = petLost.map(({ name, size, _id, address, updatedAt }) => (
    <Col xs={22} md={10} lg={10} className={styles.adoption}>
      <CardLost
        namePet={name}
        key={_id}
        place={address.street}
        date={updatedAt}
      />
    </Col>
  ))

  return (
    <Layout>
      <Row justify='center'>
        <Col xs={22} md={22} lg={22}>
          <Carousel autoplay>{UICardsLost}</Carousel>
        </Col>
      </Row>
      <Row justify='center'>{UICardsAdoption}</Row>
    </Layout>
  )
}

// let UICardsPopular = popularArr.map(
//   ({ title, subtitle, author, hour, content, popular, img, key }) => (
//     <Link className='anchor' to={`/${key}`}>
//       <CardGeneral
//         screen='popular'
//         key={key}
//         title={title}
//         subtitle={subtitle}
//         author={author}
//         content={content}
//         img={img}
//       />
//     </Link>
//   )
// )

// return (
//   <>
//     <div onScroll={() => console.log('hi')}>
//       <div className='menuSub'>
//         <MenuSub />
//       </div>
//       <div>{UICardsPopular}</div>
//     </div>
//   </>
// )
