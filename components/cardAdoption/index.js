import React from "react";
import styles from "./cardAdoption.module.scss";
import { Row, Col } from "antd";
import imgeCardA from "../../public/imagenes_svg_mobil/LucaPato.jpg";
import IconUG from "../../public/imagenes_svg_mobil/iconUbgrey.svg";
import IconPG from "../../public/imagenes_svg_mobil/iconPatitaGrey.svg";

export default function CardAdoption() {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24}>
        <div className={styles.containerPrinA}>
          <div>
            <img className={styles.imageCardAdop} src={imgeCardA} />
          </div>
          <div className={styles.containertt}>
            <p className={styles.TextN}>Hola soy Luca</p>
          </div>
          <div className={styles.containerU}>
            <img className={styles.IconUA} src={IconPG} />
            <p className={styles.TextIN}>cariñoso - juguetón</p>
          </div>
          <div className={styles.containerU}>
            <img className={styles.IconUA} src={IconUG} />
            <p className={styles.TextIN}>CDMX</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}
