/* import React from "react"; */
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './MenuH.module.scss'
import Btn from '../Btn'

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
          <li className={styles.iconLi}><img className={styles.iconM} src='/Home.png' /><a href='#'>Inicio</a></li>
          <li className={styles.iconLi}><img className={styles.iconM} src='/QRMenu.png' /><a href='#'>Escaner</a></li>
          <li className={styles.iconLi}><img className={styles.iconM} src='/Alert.png' /><a href='#'>Alerta</a></li>
          <li className={styles.iconLi}><img className={styles.iconM} src='/Adoption.png' /><a href='#'>Adopta</a></li>
          <li className={styles.iconLi}><img className={styles.iconM} src='/AddPost.png' /><a href='#'>Publica</a></li>
          <li className={styles.iconLi}><img className={styles.iconM} src='/PerfilPet.png' /><a href='#'>Mascota</a></li>
          <li className={styles.iconLi}><img className={styles.iconM} src='/AddPet.png' /><a href='#'>Agraga</a></li>
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
