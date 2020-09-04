import React, { useRef } from 'react'
import CartelPetAlert from '../cartelPetAlet'
import styles from './DownLoadCartel.module.scss'

import * as componentExportImage from 'react-component-export-image'

export default function DownloadCartel ({ data: { pet } }) {
  const componentRef = useRef()

  return (
    <>
      <CartelPetAlert data={pet} ref={componentRef} />
      <div className={styles.containerBtn}>
        <button
          className={styles.btnQrD}
          onClick={() =>
            componentExportImage.exportComponentAsJPEG(componentRef)}
        >
          Download As JPEG
        </button>
        <button
          className={styles.btnQrD}
          onClick={() =>
            componentExportImage.exportComponentAsPDF(componentRef)}
        >
          Download As PDF
        </button>
        <button
          className={styles.btnQrD}
          onClick={() =>
            componentExportImage.exportComponentAsPNG(componentRef)}
        >
          Download As PNG
        </button>
      </div>
    </>
  )
}
