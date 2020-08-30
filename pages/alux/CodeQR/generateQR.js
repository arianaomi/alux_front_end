// components
import LayoutCurve from '../../../components/LayoutCurve';
import Btn from '../../../components/Btn';
// sass
import styles from '../../../styles/alux/codeQR/_generateQR.module.scss';
// ant-design
import { Row, Col } from 'antd';

function generateQR () {
  return (
    <LayoutCurve title='QR personalizado'>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className={styles.dog_QR}>
            <img src='/dogQR.svg' />
            <div className={styles.codeQR}>
              <h1>QR</h1>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className={styles.wrapperBtn}>
            <a>Descargar código QR</a>
            <div className={styles.btn}>
              <Btn
                content='Comprar placa'
                typeBtn='btn_secondary'
                link='/alux/CodeQR/generateQR'
              />
            </div>
            <div className={styles.btn}>
              <Btn
                content='Terminar Registro'
                typeBtn='btn_primary'
                link='/alux/home'
              />
            </div>
          </div>
        </Col>
      </Row>
    </LayoutCurve>
  )
}
export default generateQR
