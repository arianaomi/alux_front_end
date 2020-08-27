import React from 'react';
import styles from './cardLost.module.scss';
import { Row, Col } from 'antd';
import imgeCardL from '../../public/imagenes_svg_mobil/perritoLost.png';
import InfoC from '../../public/imagenes_svg_mobil/iconInfo.svg';
import UbicaC from '../../public/imagenes_svg_mobil/iconUbica.svg';
import CalendC from '../../public/imagenes_svg_mobil/iconCalend.svg';

export default function CardLost () {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24}>
        <div>
          <div className={styles.capa} />
          <img className={styles.imageCarL} src={imgeCardL} />
          <div className={styles.containerDataLost}>
            <div className={styles.containerUnoTL}>
              <p className={styles.textT}>Soy Peluso me perdí</p>
            </div>
            <div className={styles.containerDosTL}>
              <div className={styles.contInf}>
                <img className={styles.IconC} src={CalendC} />
                <p className={styles.textD}>05.08.2020</p>
              </div>
              <div className={styles.contInf}>
                <img className={styles.IconU} src={UbicaC} />
                <p className={styles.textD}>CDMX</p>
              </div>
              <img className={styles.InfoI} src={InfoC} />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
