import React from "react";
import styles from "./cardAdoption.module.scss";
import { Row, Col } from "antd";

export default function CardAdoption() {
  return (
    <div className={styles.containerPrinA}>
      <div>
        <img className={styles.imageCardAdop} src="/LucaPato.jpg" />
      </div>
      <div className={styles.containertt}>
        <p className={styles.TextN}>Hola soy Luca</p>
      </div>
      <div className={styles.containerU}>
        <img className={styles.IconUA} src="/iconPatitaGrey.svg" />
        <p className={styles.TextIN}>cariñoso - juguetón</p>
      </div>
      <div className={styles.containerU}>
        <img className={styles.IconUA} src="/iconUbgrey.svg" />
        <p className={styles.TextIN}>CDMX</p>
      </div>
    </div>
  );
}
