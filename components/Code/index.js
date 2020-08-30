import React, { forwardRef } from 'react'
import QRCode from 'qrcode.react'

function Code ({ value }, ref) {
  return (
    <div ref={ref}>
      <QRCode value={value} includeMargin='true' />
    </div>

  )
}

export default forwardRef(Code)
