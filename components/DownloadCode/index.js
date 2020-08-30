import React, { useRef } from 'react'
import Code from '../Code'

import * as componentExportImage from 'react-component-export-image'

export default function DownloadCode ({ value }) {
  const componentRef = useRef()

  return (
    <>
      <Code value={value} ref={componentRef} />
      <button onClick={() => componentExportImage.exportComponentAsJPEG(componentRef)}>
        Download As JPEG
      </button>
      <button onClick={() => componentExportImage.exportComponentAsPDF(componentRef)}>
        Download As PDF
      </button>
      <button onClick={() => componentExportImage.exportComponentAsPNG(componentRef)}>
        Download As PNG
      </button>
    </>
  )
}
