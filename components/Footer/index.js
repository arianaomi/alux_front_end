import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.FooterScss}>
        <p className={styles.textFooter}>Su boleto a casa</p>
        <img className={styles.imageFooter} src='/ThanksB.png' />
        <p className={styles.textFooter}>Derechos reservados</p>
      </div>
    </div>
  )
}
