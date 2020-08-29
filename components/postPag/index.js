import React from 'react';
import styles from './postP.module.scss';
import { Avatar, Row, Col } from 'antd';

export default function PostP({ image, namePet, title, Text }) {
  const avatar = image ? (
    <Avatar size={94} src={image} />
  ) : (
      <Avatar icon={<UserOutlined />} />
    )

  return (
    <div className={styles.containerPostg}>
      <div>
        <img className={styles.imagePost} src={image} />
      </div>
      <div className={styles.containerP}>
        <div>{avatar}</div>
        <div className={styles.contts}>
          <h3 className={styles.TextTitle}>{title}</h3>
          <div className={styles.containerDos}>
            <h4 className={styles.TextName}>{namePet}</h4>
            <div>
              <img className={styles.heartC} src='/Heart.svg' />
              <img className={styles.patitasC} src='/patitasCard.svg' />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.textPost}>{Text}</p>
    </div>
  )
}
