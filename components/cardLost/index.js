import React from 'react'
import styles from './cardLost.module.scss'

export default function CardLost ({ image, namePet, date, place }) {
  return (
    <div className={styles.wrapper_lost}>
      <div className={styles.capa} />
      <img className={styles.imageCarL} src={image} />
      <div className={styles.containerDataLost}>
        <div className={styles.containerUnoTL}>
          <p className={styles.textT}>{`Soy ${namePet}  me perdí`}</p>
        </div>
        <div className={styles.containerDosTL}>
          <div className={styles.contInf}>
            <img className={styles.IconC} src='/iconCalend.svg' />
            <p className={styles.textD}>{date}</p>
          </div>
          <div className={styles.contInf}>
            <img className={styles.IconU} src='/iconUbica.svg' />
            <p className={styles.textD}>{place}</p>
          </div>
          <img className={styles.InfoI} src='/iconInfo.svg' />
        </div>
      </div>
    </div>
  )
}
