import React, { useRef } from 'react'
import CartelPetAlert from '../cartelPetAlet'
import styles from './DownLoadCartel.module.scss'

import * as componentExportImage from 'react-component-export-image'

export default function DownloadCartel (
  image,
  namePet,
  date,
  sex,
  lugar,
  zice,
  especie,
  señasParticulares,
  color,
  raza,
  contact
) {
  const componentRef = useRef()

  return (
    <>
      <CartelPetAlert
        image={image}
        namePet={namePet}
        date={date}
        sex={sex}
        lugar={lugar}
        zice={zice}
        especie={especie}
        señasParticulares={señasParticulares}
        color={color}
        raza={raza}
        contact={contact}
        ref={componentRef}
      />
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
