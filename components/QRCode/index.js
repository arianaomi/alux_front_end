import React from 'react'
import QRCodeReact from 'qrcode.react'

function QRCode ({ value }) {
  return <QRCodeReact value={value} includeMargin='true' size='128' />
}

export default QRCode
