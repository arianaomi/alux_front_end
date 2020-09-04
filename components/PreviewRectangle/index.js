import React from 'react'
import styles from './PreviewRectangle.module.scss'

function PreviewRectangle ({ src }) {
  return (
    <div>
      <img src={src} className={styles.imagen} />
    </div>
  )
}
export default PreviewRectangle
