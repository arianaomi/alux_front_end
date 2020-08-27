import React from 'react'
import styles from './cardGralxl.module.scss'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default function CardGralxl ({ title, image, namePet, text }) {
  const avatar = image ? (
    <Avatar src={image} />
  ) : (
    <Avatar icon={<UserOutlined />} />
  )

  return (
    <div className={styles.containerPrin}>
      <div className={styles.containerCardG}>
        {avatar}
        <div className={styles.textcontainer}>
          <h3 className={styles.TextTitle}>{title}</h3>
          <h4 className={styles.TextName}>{namePet}</h4>
        </div>
      </div>
      <div>
        <img className={styles.imageCarg} src={image} />
      </div>
      <div className={styles.textCard}>
        <p>{text}</p>
        <div className={styles.iconCard}>
          <div className={styles.iconCardUD}>
            <img className={styles.heartC} src='/Heart.svg' />
          </div>
          <div className={styles.iconCardUD}>
            <img className={styles.patitasC} src='/patitasCard.svg' />
          </div>
        </div>
      </div>
    </div>
  )
}
