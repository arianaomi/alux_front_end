import React from 'react';
import styles from './footer.module.scss';
import { Row, Col } from 'antd';
import Thanxs from '../../public/imagenes_svg_mobil/ThanksB.png';

export default function CompFooter () {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24}>
        <div className={styles.containerFooter}>
          <div className={styles.FooterScss}>
            <p className={styles.textFooter}>Su boleto a casa</p>
            <img className={styles.imageFooter} src={Thanxs} />
            <p className={styles.textFooter}>Derechos reservados</p>
          </div>
        </div>
      </Col>
    </Row>
  )
}
