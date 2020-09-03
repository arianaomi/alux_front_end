import React, { forwardRef } from 'react'
import QRCode from 'qrcode.react'

function Code ({ value }, ref) {
  return (
    <div ref={ref}>
      <QRCode value={value} includeMargin size={228} />
    </div>
  )
}

export default forwardRef(Code)
