import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.module.contRMB}>
      <ul className="LeftSideBar__LeftSection__menuWrapper">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
}
