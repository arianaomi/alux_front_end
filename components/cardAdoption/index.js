import React from 'react'
import styles from './cardAdoption.module.scss'

export default function CardAdoption ({ image, namePet, place, info }) {
  return (
    <div className={styles.containerPrinA}>
      <div>
        <img className={styles.imageCardAdop} src={image} />
      </div>
      <div className={styles.containertt}>
        <p className={styles.TextN}>{`Hola soy ${namePet}`}</p>
      </div>
      <div className={styles.containerU}>
        <img className={styles.IconUA} src='/iconPatitaGrey.svg' />
        <p className={styles.TextIN}>{info}</p>
      </div>
      <div className={styles.containerU}>
        <img className={styles.IconUA} src='/iconUbgrey.png' />
        <p className={styles.TextIN}>{place}</p>
      </div>
    </div>
  )
}
