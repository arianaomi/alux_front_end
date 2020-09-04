import React, { forwardRef } from 'react'
import styles from './cartelPetAlert.module.scss'
import Avatar from '../AvatarCmpnt'
import moment from 'moment'
import Moment from 'react-moment'
function CartelPetAlert ({ data }, ref) {
  const address = data.address
    ? `${data.address.street}  ${data.address.number} ${data.address.block}`
    : ''
  return (
    <div className={styles.continerC} ref={ref}>
      <div className={styles.circle}>
        <div className={styles.avatatQ}>
          <Avatar />
        </div>
      </div>
      <div>
        <h2 className={styles.TextName}>{data.name}</h2>
        <h3 className={styles.TextAleAdp}>¡ Me perdí!</h3>
        <h4 className={styles.TextAleAdpDos}>Ayudame a regresar a casa!</h4>
      </div>
      <div className={styles.wrapperInfo}>
        <div className={styles.containerDS}>
          <div className={styles.containerdos}>
            <img className={styles.calendarA} src='/calendarGrey.png' />
            <p className={styles.textCartG}>
              <Moment format='YYYY/MM/DD'>{data.updatedAt}</Moment>
            </p>
          </div>
          <div className={styles.containerSMW}>
            <img className={styles.iconM} src='/SexMale2.png' />
            <img className={styles.iconW} src='/SexWom2.png' />
            <p className={styles.textCartG}>{data.sex}</p>
          </div>
        </div>
        <div className={styles.containerUT}>
          <img className={styles.street} src='/IconUbgrey.png' />
          <p className={styles.textCartL}>{address}</p>
        </div>
        <div className={styles.contaTE}>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Tamaño:</p>
            <p className={styles.textCartL}>{data.size}</p>
          </div>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Especie:</p>
            <p className={styles.textCartL}>{data.species}</p>
          </div>
        </div>
        <div className={styles.contaTE}>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Color:</p>
            <p className={styles.textCartL}>{data.color}</p>
          </div>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Raza:</p>
            <p className={styles.textCartL}>{data.breed}</p>
          </div>
        </div>
        <div className={styles.contaTE}>
          <div className={styles.contaTE}>
            <p className={styles.texP}>Señas particulares:</p>
            <p className={styles.textCartL}>{data.particularSigns}</p>
          </div>
        </div>
        <div className={styles.containerUTtel}>
          <img className={styles.ubicT} src='/IconTel.png' />
          <p className={styles.textCartTel}>{data.owner.phoneNumber}</p>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(CartelPetAlert)
