import React, { useState } from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

function AvatarCmpnt() {
  const [imagePet, setImagePet] = useState('')

  const avatar = imagePet ? (
    <Avatar src={imagePet} />
  ) : (
    <Avatar size={64} icon={<UserOutlined />} />
  )

  return <>{avatar}</>
}
export default AvatarCmpnt
