import PostForm from '../../../components/Pages/PostForm'
import Btn from '../../../components/Btn'
import { Row, Col } from 'antd'
import HeaderRectan from '../../../components/HeaderRectan'
import Footer from '../../../components/Footer'
import styles from '../../../styles/alux/UnPost/PostNew/_UploadPost.module.scss'
import Uploader from '../../../components/Uploader'
import { addPostService } from '../../../services'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function createPost () {
  // States
  const router = useRouter()
  const [token, setToken] = useState('')
  const [user, setUser] = useState('')
  const [imageurl, setImageUrl] = useState('')

  useEffect(() => {
    const tokenn = localStorage.getItem('token')
    setToken(tokenn)
    console.log('token en el estado', token)
    const author = localStorage.getItem('userId')
    setUser(author)
    console.log('user en el estado', user)
  }, [])

  function handleFile (url) {
    setImageUrl(url)
    console.log('url en el estado:', imageurl)
  }

  async function handlePostForm ({ title, tags, content }) {
    const createdAt = new Date()
    const post = { title, content, user, imageurl, tags, createdAt }
    try {
      const response = await addPostService(post, token)
      const postID = response.data.newEntry._id
      router.push(`/entries/${postID}`)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <HeaderRectan title='Nuevo Post' />
      <Row>
        <Col offset={4} xs={20} sm={20} md={10} lg={10}>
          <Uploader callback={handleFile} />
        </Col>

        <Col offset={2} xs={20} sm={20} md={10} lg={10}>
          <PostForm callback={handlePostForm} />
        </Col>
        <Col xs={20} sm={20} md={10} lg={24}>
          <div className={styles.containerBtn}>
            <Btn content='regresar' typeBtn='btn_secondary' />
          </div>
        </Col>
      </Row>
      <div className={styles.containerimg}>
        <img src='/animalitosPost.png' className={styles.img} />
      </div>
      <Footer />
    </>
  )
}
