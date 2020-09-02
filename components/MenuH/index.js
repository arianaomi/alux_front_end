/* import React from "react"; */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './MenuH.module.scss'

const BuMenu = () => {
  const [status, setStatus] = useState('close')
  const [pet, setPet] = useState('')
  // console.log(status)

  useEffect(() => {
    const pet = localStorage.getItem('petId')
    setPet(pet)
    // console.log(pet)
  }, [])

  return (
    <nav className={styles.navContainer}>
      <div
        className={styles.BurgerMenuContainer}
        role='button'
        onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
      >
        <i className={status} />
        <i className={status} />
        <i className={status} />
      </div>
      <div className={styles.ContainerDivUl}>
        {status === 'open' ? (
          <nav>
            <ul className={styles.ContainerUl}>
              <li className={styles.iconLi}>
                <img className={styles.iconM} src='/Home.png' />
                <Link href='/alux/home'>
                  <a>Inicio</a>
                </Link>
              </li>
              <li className={styles.iconLi}>
                <img className={styles.iconM} src='/QRMenu.png' />
                <Link href='/alux/scanner'>
                  <a>Escaner</a>
                </Link>
              </li>
              <li className={styles.iconLi}>
                <img className={styles.iconM} src='/Alert.png' />
                <Link href='/alux/alert/lostPetAddress'>
                  <a>Alerta</a>
                </Link>
              </li>
              <li className={styles.iconLi}>
                <img className={styles.iconM} src='/Adoption.png' />
                <Link href='/alux/adoption/Adoption'>
                  <a>Adopta</a>
                </Link>
              </li>
              <li className={styles.iconLi}>
                <img className={styles.iconM} src='/AddPost.png' />
                <Link href='/alux/createPost'>
                  <a>Publica</a>
                </Link>
              </li>
              <li className={styles.iconLi}>
                <img className={styles.iconM} src='/PerfilPet.png' />
                <Link href={`/pets/${pet}`}>
                  <a>Mascota</a>
                </Link>
              </li>
              <li className={styles.iconLi}>
                <img className={styles.iconM} src='/AddPet.png' />
                <Link href='/alux/Registry/formPet-1'>
                  <a>Agregar</a>
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </nav>
  )
}

export default BuMenu
