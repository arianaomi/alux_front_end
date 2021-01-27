import React from 'react';
import QRCode from 'qrcode.react';

function QRCode({ value }) {
  return <QRCode value={value} includeMargin='true' size='512' />
}

export default QRCode
