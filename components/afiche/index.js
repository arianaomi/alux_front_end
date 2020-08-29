import React from 'react';
import styles from './afiche.module.scss';
import { Avatar, Row, Col } from 'antd';

export default function AfichePet ({
  image,
  namePet,
  alertAdop,
  title,
  date,
  sex,
  lugar,
  zice,
  especie,
  señasParticulares,
  temperamento,
  Convive,
  color,
  raza,
  contact
}) {
  const avatar = image ? (
    <Avatar size={201} src={image} />
  ) : (
    <Avatar icon={<UserOutlined />} />
  )
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24}>
        <div className={styles.continerC}>
          <div className={styles.circle}>
            <div>{avatar}</div>
          </div>
          <div>
            <h2 className={styles.TextName}>{namePet}</h2>
            <h3 className={styles.TextAleAdp}>{alertAdop}</h3>
            <h4 className={styles.TextAleAdpDos}>{title}</h4>
          </div>

          <div>
            <div className={styles.containerdos}>
              <img className={styles.calendarA} src='/calendar.svg' />
              <p className={styles.textCartG}>{date}</p>
              <img className={styles.calendarA} src='/SexMale.svg' />
              <p className={styles.textCartG}>{sex}</p>
            </div>
            <div className={styles.containerdos}>
              <img className={styles.ubic} src='/IconUbgrey.svg' />
              <p className={styles.textCartG}>{lugar}</p>
            </div>

            <div>
              <p>{zice}</p>
              <p>{especie}</p>
            </div>
            <div>
              <p>{color}</p>
              <p>{raza}</p>
            </div>
            <p>{señasParticulares}</p>
            <div>
              <p>{temperamento}</p>
              <p>{Convive}</p>
            </div>
            <div>
              <img className={styles.ubic} src='/IconTel.svg' />
              <p>{contact}</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
