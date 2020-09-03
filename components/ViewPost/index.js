import React from 'react'
import styles from './postP.module.scss'

export default function VieWPost ({ image, namePet, title, Text }) {
  /* const avatar = image ? (
    <Avatar size={94} src={image} />
  ) : (
      <Avatar icon={<UserOutlined />} />
    ) */
  /* <div>{avatar}</div> */
  return (
    <div className={styles.containerPostg}>
      <div>
        <img className={styles.imagePost} src={image} />
      </div>
      <div className={styles.containerP}>

        <div className={styles.contts}>
          <h3 className={styles.TextTitle}>{title}</h3>
          <div className={styles.containerDos}>
            <h4 className={styles.TextName}>{namePet}</h4>
            <div>
              <img className={styles.heartC} src='/Heart.png' />
              <img className={styles.patitasC} src='/patitasCard.png' />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.textPost}>{Text}</p>
    </div>
  )
}
