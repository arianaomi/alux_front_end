import React from 'react'
import { useEffect, useState } from 'react'
import absoluteUrl from 'next-absolute-url'
// components
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import ViewPost from '../../components/ViewPost'
import { getPostService } from '../../services'
// ant-d
import { Row, Col } from 'antd'
import { useRouter } from 'next/router'

export default function EntrieId() {
  const router = useRouter()
  const [post, setPost] = useState({})
  const [content, setContent] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [imageurl, setImageurl] = useState('')
  const [title, setTitle] = useState('')
  const [user, setUser] = useState('')
  const [id, setId] = useState('')
  const [tags, setTags] = useState('')

  useEffect(() => {
    console.log(router.query.id)
    const postId = router.query.id
    if (postId) {
      ; (async () => {
        try {
          const response = await getPostService(postId)
          const postObj = response.data.entry
          setPost(postObj)
          console.log(postObj)
          const { content, createdAt, imageurl, tags, title, user, _id } = postObj
          setContent(content)
          setCreatedAt(createdAt)
          setImageurl(imageurl)
          setTitle(title)
          setUser(user)
          setId(_id)
          setTags(tags)
        } catch (error) {
          console.log(error)
        }
      })()
    }
  }, [router.query.id])



  return (
    <Layout title='Publicaciones'>
      <Row>
        <Col offset={1} xs={22} sm={22} md={22} lg={17}>
          <ViewPost
            title={title}
            namePet={user}
            image={imageurl}
            Text={content}
          />
        </Col>
        <Col xs={24}>
          <Footer />
        </Col>
      </Row>
    </Layout>
  )
}
