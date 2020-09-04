import React, { useState } from 'react'
import style from './Uploader.module.scss'
import { Button } from 'antd'

import PreviewCircle from '../PreviewCircle'

// Firebase
import firebase from '../../firebase'

export default function Uploader({ callback }) {
  const [file, setFile] = useState('')
  const [preview, setPreview] = useState('')

  // const handlePictureClick = () => {
  //   document.querySelector('#fileSelector').click()
  // }

  function handleFileChange(e) {
    setFile(e.target.files[0])
    console.log(file)
    const reader = new FileReader()
    reader.onload = event => {
      console.log(event.target.result)
      setPreview(event.target.result)
    }
    reader.readAsDataURL(file)
  }

  function saveFile(file) {
    const storage = firebase.storage()
    const storageRef = storage.ref()
    const galleryRef = storageRef.child('gallery')
    const uploadTask = galleryRef.child('file.name').put(file)
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log('Upload is ' + progress + '% done')
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused')
          break
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running')
          break
      }
    }, function (error) {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          console.log('sin permisos')
          break
        case 'storage/canceled':
          console.log('carga cancelada')
          break
        case 'storage/unknown':
          console.log('Lugar de carga desconocido o no disponible')
          break
      }
    }, function () {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log('File available at', downloadURL)
        const imgUrl = downloadURL
        console.log(imgUrl)
        callback(imgUrl)
      })
    })
  }

  return (
    <>
      <PreviewCircle src={preview} />
      <div className={style.contAgI}>
        <input
          // className={style.d_none}
          id='fileSelector'
          type='file'
          onChange={handleFileChange}
        />
        {/* <Button
            className={style.upload_button}
            onClick={handlePictureClick}
          >Agregar imagen
        </Button> */}
        <Button onClick={saveFile}>Guardar imagen</Button>
        <img className={style.IconC} src='/CamF1.png' />
      </div>
    </>
  )
}
