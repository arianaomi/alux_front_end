import React from 'react'
import dynamic from 'next/dynamic'
// components
import LayoutCurve from '../../../components/LayoutCurve'
import Btn from '../../../components/Btn'
//import DownloadCode from '../../../components/DownloadCode'
// import Code from '../../../components/Code'

// sass
import styles from '../../../styles/alux/codeQR/_generateQR.module.scss'

// ant-design
import { Row, Col } from 'antd'

const DownloadCode = dynamic(
  () => import('../../../components/DownloadCode'),
  { ssr: false }
)

function GenerateQR() {
  return (
    <LayoutCurve title='QR personalizado'>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className={styles.dog_QR}>
            <img src='/dogQR.svg' />
            <div className={styles.codeQR}>
              <p>Tu código QR personalizado</p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className={styles.wrapperBtn}>
            <DownloadCode value='https://www.youtube.com/watch?v=sCYzXDYN_vk' />
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
export default GenerateQR
