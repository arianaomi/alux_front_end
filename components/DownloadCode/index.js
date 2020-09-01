import React, { useRef } from 'react'
import Code from '../Code'
import styles from './BtnQr.module.scss'

import * as componentExportImage from 'react-component-export-image'

export default function DownloadCode ({ value }) {
  const componentRef = useRef()

  return (
    <>
      <Code value={value} ref={componentRef} />
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
