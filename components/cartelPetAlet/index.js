import React, { forwardRef } from 'react'
import styles from './cartelPetAlert.module.scss'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
function CartelPetAlert ({ image }, ref) {
  const avatar = image.image ? (
    <Avatar size={201} src={image.image} />
  ) : (
    <Avatar icon={<UserOutlined />} />
  )
  console.log('data', image)
  return (
    <div className={styles.continerC} ref={ref}>
      <div className={styles.circle}>
        <div className={styles.avatatQ}>{avatar}</div>
      </div>
      <div>
        <h2 className={styles.TextName}>{image.namePet}</h2>
        <h3 className={styles.TextAleAdp}>¡ Me perdí!</h3>
        <h4 className={styles.TextAleAdpDos}>Ayudame a regresar a casa!</h4>
      </div>
      <div>
        <div className={styles.containerDS}>
          <div className={styles.containerdos}>
            <img className={styles.calendarA} src='/calendarGrey.png' />
            <p className={styles.textCartG}>{image.date}</p>
          </div>
          <div className={styles.containerSMW}>
            <img className={styles.iconM} src='/SexMale2.png' />
            <img className={styles.iconW} src='/SexWom2.png' />
            <p className={styles.textCartG}>{image.sex}</p>
          </div>
        </div>
        <div className={styles.containerUT}>
          <img className={styles.ubic} src='/IconUbgrey.png' />
          <p className={styles.textCartL}>{image.lugar}</p>
        </div>
        <div className={styles.contaTE}>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Tamaño:</p>
            <p className={styles.textCartL}>{image.zice}</p>
          </div>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Especie:</p>
            <p className={styles.textCartL}>{image.especie}</p>
          </div>
        </div>
        <div className={styles.contaTE}>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Color:</p>
            <p className={styles.textCartL}>{image.color}</p>
          </div>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Raza:</p>
            <p className={styles.textCartL}>{image.raza}</p>
          </div>
        </div>
        <div className={styles.contaTE}>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Señas particulares:</p>
            <p className={styles.textCartL}>{image.señasParticulares}</p>
          </div>
        </div>
        <div className={styles.containerUTtel}>
          <img className={styles.ubicT} src='/IconTel.png' />
          <p className={styles.textCartTel}>{image.contact}</p>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(CartelPetAlert)
