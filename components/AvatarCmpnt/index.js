import React, { useState } from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styles from './AvatarCmpnt.module.scss'

function AvatarCmpnt() {
  const [imagePet, setImagePet] = useState('')

  const avatar = imagePet ? (
    <Avatar src={imagePet} />
  ) : (
      <Avatar icon={<UserOutlined />} className={styles.avatar} />
    )

  return <>{avatar}</>
}
export default AvatarCmpnt
