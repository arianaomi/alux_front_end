import PostForm from '../../../components/Pages/PostForm'
import Btn from '../../../components/Btn'
import { Row, Col, Modal } from 'antd'
import HeaderRectan from '../../../components/HeaderRectan'
import Footer from '../../../components/Footer'
import styles from '../../../styles/alux/UnPost/PostNew/_UploadPost.module.scss'
import Uploader from '../../../components/Uploader'
import { addPostService } from '../../../services'
import React, { useState, useEffect } from 'react'
import PreviewRectangle from '../../../components/PreviewRectangle'
import { CloseOutlined } from '@ant-design/icons'

export default function createPost () {
  // States
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

  useEffect(() => {
    if (imageurl) {
      Modal.success({
        content: 'La imagen se guardó exitosamente'
      })
    }
  }, [imageurl])

  function handleFile (url) {
    console.log(url)
    setImageUrl(url)
  }
  function eraseFile () {
    setImageUrl('')
  }

  async function handlePostForm ({ title, tags, content }) {
    const createdAt = new Date()
    console.log(createdAt)
    const post = { title, content, user, imageurl, tags, createdAt }
    console.log(post)
    try {
      const response = await addPostService(post, token)
      console.log(response)
      const postID = response.data.newEntry._id
      console.log(postID)
      localStorage.setItem('postID', postID)
      if (!postID) {
        Modal.error({
          title: 'Error',
          content: 'El post no se guardó, por favor vuelve a intentarlo'
        })
      } else {
        Modal.success({
          content: 'El post se guardó exitosamente'
        })
      }
      Router.push(`/alux/entries/${postID}`)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <HeaderRectan title='Nuevo Post' />
      <Row>
        <Col offset={4} xs={20} sm={20} md={10} lg={10}>
          {!imageurl
            ? (
              <Uploader callback={handleFile} />
            )
            : (<>
              <button type='dashed' shape='circle' onClick={eraseFile} icon={<CloseOutlined />}>Borrar imagen</button>
              <PreviewRectangle src={imageurl} />
               </>)}
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
