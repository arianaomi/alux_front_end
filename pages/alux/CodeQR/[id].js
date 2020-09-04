import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
// components
import { useEffect, useState } from 'react'
import absoluteUrl from 'next-absolute-url'
import LayoutCurve from '../../../components/LayoutCurve'
import Btn from '../../../components/Btn'
// sass
import styles from '../../../styles/alux/codeQR/_generateQR.module.scss'
// ant-design
import { Row, Col } from 'antd'
import { getPet } from '../../../services'
// services
import { useRouter } from 'next/router'

const DownloadCode = dynamic(() => import('../../../components/DownloadCode'), {
  ssr: false,
})

export default function GenerateQR({ origin }) {
  const router = useRouter()
  const petUrl = `${origin}/pets/readQR?token=`
  const [pet, setPet] = useState(null)
  console.log(petUrl)

  useEffect(() => {
    console.log(router.query.id)
    if (router.query.id) {
      ;(async () => {
        try {
          const { data } = await getPet(router.query.id)
          //console.log(data)
          setPet(data)
        } catch (error) {
          //console.log(error)
        }
      })()
    }
  }, [router.query.id])
  //console.log(pet)

  return (
    <LayoutCurve title='QR personalizado'>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className={styles.dog_QR}>
            <img className={styles.qrc} src='/dogQR.png' />
            <div className={styles.codeQRContiner}>
              {Boolean(pet) && <DownloadCode value={`${petUrl}${pet.token}`} />}
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className={styles.conttextcqr}>
            <p className={styles.textcqrt}>TU BOLETO A CASA</p>
            <p className={styles.textcqr}>
              Este es tu código personalizado, el cual te ayudará a dirigirte al
              perfil de tu mascota, levantar una alerta o dar en adopción.
            </p>
          </div>
          <div className={styles.wrapperBtn}>
            <div className={styles.btn}>
              <Btn
                content='Comprar placa'
                typeBtn='btn_secondary'
                link='/alux/CodeQR/badgePage'
              />
            </div>
            <div className={styles.btn}>
              <Btn
                content='Terminar Registro'
                typeBtn='btn_primary'
                link='/alux/home'
              />
            </div>
            <Link href='/alux/home'>
              <a>Regresar</a>
            </Link>
          </div>
        </Col>
      </Row>
    </LayoutCurve>
  )
}

GenerateQR.getInitialProps = ({ req }) => {
  let { origin } = absoluteUrl(req, 'localhost:3000')
  //ToDo: no es necesario cuando cuando ya tiene https: CHECAR
  origin = origin.includes(':3000') ? origin.replace('https', 'http') : origin
  return { origin }
}
