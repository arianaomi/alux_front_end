import React, { useRef } from 'react'
import CartelPetAdop from '../cartelPetAdop'
import styles from './DownLoadCartelAdop.module.scss'

import * as componentExportImage from 'react-component-export-image'

export default function DownloadAdoption({ data }) {
  const componentRef = useRef()

  return (
    <>
      <CartelPetAdop data={data} ref={componentRef} />
      <div className={styles.containerBtn}>
        <button
          className={styles.btnQrD}
          onClick={() =>
            componentExportImage.exportComponentAsJPEG(componentRef)
          }
        >
          Download As JPEG
        </button>
        <button
          className={styles.btnQrD}
          onClick={() =>
            componentExportImage.exportComponentAsPDF(componentRef)
          }
        >
          Download As PDF
        </button>
        <button
          className={styles.btnQrD}
          onClick={() =>
            componentExportImage.exportComponentAsPNG(componentRef)
          }
        >
          Download As PNG
        </button>
      </div>
    </>
  )
}
