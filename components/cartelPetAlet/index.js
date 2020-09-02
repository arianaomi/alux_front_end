import React from 'react'
import styles from './cartelPetAlert.module.scss'
import { Avatar, Row, Col } from 'antd'

export default function CartelPetAlert ({
  image,
  namePet,
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
    <div className={styles.continerC}>
      <div className={styles.circle}>
        <div className={styles.avatatQ}>{avatar}</div>
      </div>
      <div>
        <h2 className={styles.TextName}>{namePet}</h2>
        <h3 className={styles.TextAleAdp}>¡ Me perdí!</h3>
        <h4 className={styles.TextAleAdpDos}>Ayudame a regresar a casa!</h4>
      </div>
      <div>
        <div className={styles.containerDS}>
          <div className={styles.containerdos}>
            <img className={styles.calendarA} src='/calendarGrey.png' />
            <p className={styles.textCartG}>{date}</p>
          </div>
          <div className={styles.containerSMW}>
            <img className={styles.iconM} src='/SexMale2.png' />
            <img className={styles.iconW} src='/SexWom2.png' />
            <p className={styles.textCartG}>{sex}</p>
          </div>
        </div>
        <div className={styles.containerUT}>
          <img className={styles.ubic} src='/IconUbgrey.png' />
          <p className={styles.textCartL}>{lugar}</p>
        </div>
        <div className={styles.contaTE}>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Tamaño:</p>
            <p className={styles.textCartL}>{zice}</p>
          </div>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Especie:</p>
            <p className={styles.textCartL}>{especie}</p>
          </div>
        </div>
        <div className={styles.contaTE}>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Color:</p>
            <p className={styles.textCartL}>{color}</p>
          </div>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Raza:</p>
            <p className={styles.textCartL}>{raza}</p>
          </div>
        </div>
        <div className={styles.contaTE}>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Señas particulares:</p>
            <p className={styles.textCartL}>{señasParticulares}</p>
          </div>
        </div>
        <div className={styles.containerUTtel}>
          <img className={styles.ubicT} src='/IconTel.png' />
          <p className={styles.textCartTel}>{contact}</p>
        </div>
      </div>
    </div>
  )
}
