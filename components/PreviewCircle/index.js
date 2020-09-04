import React, { useState } from 'react'
import styles from './PreviewCircle.module.scss'

function PreviewCircle ({ src }) {
  return (
    <div>
      <img src={src} className={styles.imagen} />
    </div>
  )
}
export default PreviewCircle
