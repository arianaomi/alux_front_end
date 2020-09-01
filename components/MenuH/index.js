/* import React from "react"; */
import React, { useState } from 'react';

import styles from './MenuH.module.scss';

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
      <div>{status === 'open' ? <h1>hola</h1> : null}</div>
    </nav>
  )
};

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
