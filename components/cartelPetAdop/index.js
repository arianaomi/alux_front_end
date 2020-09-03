import React, { forwardRef } from 'react'
import styles from './cartelPetAdop.module.scss'
import { Avatar } from 'antd'

function CartelPetAdop({ data }, ref) {
  console.log('hola', data.pet.name)
  // const avatar = image.image ? (
  //   <Avatar size={201} src={image.image} />
  // ) : (
  //   <Avatar icon={<UserOutlined />} />
  // )
  return (
    <div className={styles.continerC} ref={ref}>
      <div className={styles.circle}>
        <div className={styles.avatatQ}>{data.pet.avatar}</div>
      </div>
      <div>
        <h2 className={styles.TextName}>{data.pet.name}</h2>
        <h3 className={styles.TextAleAdp}>Adopta un amigo</h3>
        <h4 className={styles.TextAleAdpDos}>Quiero ser tu amigo</h4>
      </div>
      <div>
        <div className={styles.containerDS}>
          <div className={styles.containerdos}>
            <img className={styles.calendarA} src='/calendarGrey.png' />
            <p className={styles.textCartG}>{data.pet.date}</p>
          </div>
          <div className={styles.containerSMW}>
            <img className={styles.iconM} src='/SexMale2.png' />
            <img className={styles.iconW} src='/SexWom2.png' />
            <p className={styles.textCartG}>{data.pet.sex}</p>
          </div>
        </div>
        <div className={styles.containerUT}>
          <img className={styles.ubic} src='/IconUbgrey.png' />
          <p className={styles.textCartL}>{data.pet.address.street}</p>
        </div>
        <div className={styles.contaTE}>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Tamaño:</p>
            <p className={styles.textCartL}>{data.pet.size}</p>
          </div>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Especie:</p>
            <p className={styles.textCartL}>{data.pet.species}</p>
          </div>
        </div>
        <div className={styles.contaTE}>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Color:</p>
            <p className={styles.textCartL}>{data.pet.color}</p>
          </div>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Raza:</p>
            <p className={styles.textCartL}>{data.pet.breed}</p>
          </div>
        </div>
        <div className={styles.contaTE}>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Señas particulares:</p>
            <p className={styles.textCartL}>{data.pet.particularSigns}</p>
          </div>
        </div>
        <div className={styles.contaTC}>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Temperamento:</p>
            <p className={styles.textCartL}>{data.pet.character[0]}</p>
          </div>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Convive con:</p>
            <p className={styles.textCartL}>{data.pet.character[1]}</p>
          </div>
        </div>
        <div className={styles.containerUTtel}>
          <img className={styles.ubicT} src='/IconTel.png' />
          <p className={styles.textCartTel}>{data.pet.owner.phoneNumber}</p>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(CartelPetAdop)
