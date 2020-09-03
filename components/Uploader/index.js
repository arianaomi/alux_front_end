import React, { useState } from 'react'
import style from './Uploader.module.scss'
import { Button, Modal } from 'antd'

// cloudinary
import { uploadFileService } from '../../services'

function Uploader ({ callback }) {
  const [file, setFile] = useState(null)

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click()
  }

  async function handleFileChange (e) {
    setFile(e.target.files[0])
    console.log(file)
    if (file) {
      const response = await uploadFileService(file)
      console.log(response)
      const imgUrl = response.secure_url
      console.log(imgUrl)
      console.log(response.success)
      callback(imgUrl)
    }
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
