import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { getPostsService } from '../../../services'
import { Button } from 'antd'
export default function Home() {
  // async function getAllPosts() {
  //   try {
  //     const response = await getPostsService()
  //     console.log(response)
  //     //  if (!postID) {
  //     //   Modal.error({
  //     //     title: 'Error',
  //     //     content: 'El post no se guardó, por favor vuelve a intentarlo'
  //     //   })
  //     // } else {
  //     //   Modal.success({
  //     //     content: 'El post se guardó exitosamente'
  //     //   })
  //     // }
  //     // router.push(`/entries/${postID}`)
  //   } catch (error) {
  //     console.log('error', error)
  //   }
  // }

  async function getAllPosts() {
    try {
      const response = await getPostsService()
      console.log(response)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Layout>
      <h1>Todos los post (página principal)</h1>
      <Button onClick={getAllPosts}> Traer datos</Button>
    </Layout>
  )
}
