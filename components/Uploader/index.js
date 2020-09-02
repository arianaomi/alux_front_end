import React from 'react'
import style from './Uploader.module.scss'
import { Button } from 'antd'

// cloudinary

function Uploader () {
  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    console.log(file)
    // if (file) {
    // }
  }

  return (
    <>
      <input
        className={style.d_none}
        id='fileSelector'
        type='file'
        onChange={handleFileChange}
      />
      <Button
        className={style.upload_button}
        onClick={handlePictureClick}
      >Agregar imagen
      </Button>
    </>
  )
}

export default Uploader
