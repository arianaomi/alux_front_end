import React, { useState, useEffect } from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styles from './AvatarCmpnt.module.scss'
import { getPetIdService } from '../../services'

function AvatarCmpnt({ size }) {
  const [petImage, setPetImage] = useState()

  async function getDataId() {
    const token = localStorage.getItem('token')

    const petId = localStorage.getItem('petId')
    if (petId && token) {
      try {
        const { data } = await getPetIdService(token, petId)
        console.log(data)
        setPetImage(data.imageurl)
      } catch (e) {
        console.log(e)
      }
    }
  }

  useEffect(() => {
    getDataId()
  }, [])
  let number
  if (size === 's') {
    number = 40
  } else if (size === 'md') {
    number = 60
  } else if (size === 'mdd') {
    number = 150
  } else {
    number = 280
  }
  const avatar = petImage ? (
    <Avatar size={number} src={petImage} />
  ) : (
    <Avatar size={number} src='/hamster.png' className={styles.avatar} />
  )

  return <>{avatar}</>
}
export default AvatarCmpnt
