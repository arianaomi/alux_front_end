/* import React from "react"; */
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './MenuH.module.scss'

const BuMenu = () => {
  const [status, setStatus] = useState('close')
  console.log(status)
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
      <div className={styles.ContainerDivUl}>{status === 'open' ? <nav>
        <ul className={styles.ContainerUl}>
          <li className={styles.iconLi}><img className={styles.iconM} src='/Home.png' /><Link href='/alux/home'><a>Inicio</a></Link></li>
          <li className={styles.iconLi}><img className={styles.iconM} src='/QRMenu.png' /><Link href='/Scanner'><a>Escaner</a></Link></li>
          <li className={styles.iconLi}><img className={styles.iconM} src='/Alert.png' /><Link href='/alux/alert/confirmAlert'><a>Alerta</a></Link></li>
          <li className={styles.iconLi}><img className={styles.iconM} src='/Adoption.png' /><Link href='/alux/adoption/confirmAdoption'><a>Adopta</a></Link></li>
          <li className={styles.iconLi}><img className={styles.iconM} src='/AddPost.png' /><Link href='/alux/createPost/index'><a>Publica</a></Link></li>
          <li className={styles.iconLi}><img className={styles.iconM} src='/PerfilPet.png' /><Link href='/alux/pets/loquesea'><a>Mascota</a></Link></li>
          <li className={styles.iconLi}><img className={styles.iconM} src='/AddPet.png' /><Link href='/alux/Registry/formPet-1'><a>Agrega</a></Link></li>
        </ul>
      </nav>
        : null}
      </div>
    </nav>
  )
}

export default BuMenu
/* console.log(status);
    let Menu;
    let statusMenu = (status === 'open' ? 'close' : 'open')
  if (status === "open") {
    Menu = <button onClick={() => setStatus(statusMenu)>hola</button>;
  } else {
    Menu = <button onClick={() => setStatus(statusMenu)>adios</button>;
  }
  return <>{Menu}</>;
};

export default BuMenu; */
