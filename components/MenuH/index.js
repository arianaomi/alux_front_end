/* import React from "react"; */
import React, { useState } from "react";

import styles from "./MenuH.module.scss";

const BuMenu = () => {
  const [status, setStatus] = useState("close");
  return (
    <nav className={styles.navContainer}>
      <div
        className={styles.BurgerMenuContainer}
        role="button"
        onClick={() => setStatus(status === "open" ? "close" : "open")}
      >
        <i className={status} />
        <i className={status} />
        <i className={status} />
      </div>
    </nav>
  );
};

export default BuMenu;
