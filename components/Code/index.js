import React from 'react';
import QRCode from 'qrcode.react';

function Code ({ value }) {
  return <QRCode value={value} includeMargin='true' size='512' />
}

export default Code
