import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import HeaderRectan from '../../components/HeaderRectan'
import { Row, Col, Form, Input, InputNumber, Button } from 'antd'
import Footer from '../../components/Footer'
import AvatarCmptn from '../../components/AvatarCmpnt'
import CardGralxl from '../../components/cardGeneralXL'
import styles from '../../styles/_PetProfile.module.scss'
import CardPost from '../../components/cardGeneralXL'
import Layout from '../../components/Layout'
import { getPetIdService, getPostsService } from '../../services'
/*{ title, image, namePet, text }*/
export default function PestId(imagePet) {
  const router = useRouter()
  const [petId, setPetId] = useState('')
  const [post, setPost] = useState([])

  useEffect(() => {
    const postId = router.query.id
    const token = localStorage.getItem('token')
    const owner = localStorage.getItem('userId')
    if (postId) {
      ;(async () => {
        try {
          const { data } = await getPetIdService(token, postId)
          let pet = data.pet
          setPetId(pet)

          const {
            data: { entries },
          } = await getPostsService()
          let content = entries.filter(user => owner === user.user)
          //console.log(content)

          setPost(content)

          //console.log(entries)
        } catch (error) {
          console.log(error)
        }
      })()
    }
  }, [router.query.id])

  let content = post.filter(user => user === post.user)
  console.log(content)
  const UICardsPost = post.map(({ title, imageurl, user, content, _id }) => (
    <Col xs={22} md={10} lg={10} className={styles.post} key={_id}>
      <CardPost
        title={title}
        image={imageurl}
        namePet={user.name}
        text={content}
      />
    </Col>
  ))
  return (
    <Layout title={`Perfil de ${petId.name}`}>
      <Row justify='center'>
        <Col xs={24} sm={24} md={22} lg={19} xl={19}>
          <div className={styles.continerpicProfilePet}>
            <div className={styles.picProfilePet}>
              <div className={styles.containerAv}>
                <AvatarCmptn size='mdd' />
              </div>
              <div className={styles.containerNom}>
                <p className={styles.NomPet}>{petId.name}</p>
              </div>
              <div className={styles.continerTextProfilePet}>
                <p className={styles.textDescPet}>{petId.about}</p>
              </div>
            </div>
          </div>
          <div className={styles.galeryPicContainer}>
            <div className={styles.galeryPic}>
              <img
                className={styles.picsUser}
                src='https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              />
              <img
                className={styles.picsUser}
                src='https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              />
              <img
                className={styles.picsUser}
                src='https://images.pexels.com/photos/62640/pexels-photo-62640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              />
            </div>
            <div className={styles.galeryPic}>
              <img
                className={styles.picsUser}
                src='https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              />
              <img
                className={styles.picsUser}
                src='https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              />
              <img
                className={styles.picsUser}
                src='https://images.pexels.com/photos/53813/pexels-photo-53813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row justify='center'>{UICardsPost}</Row>
    </Layout>
  )
}
