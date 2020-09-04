import React, { useState } from 'react'
import PreviewRectangle from '../../components/PreviewRectangle'
import firebase from '../../firebase'
import { Modal } from 'antd'
import BtnForm from '../../components/BtnForm'
import styles from './InputFile.module.scss'

export default function InputFile({ callback }) {
  const [preview, setPreview] = useState('')
  const [file, setFile] = useState('')
  const [imageurl, setImageUrl] = useState('')

  const changeFile = (e) => {
    const fileData = e.target.files[0]
    setFile(fileData)
    const reader = new FileReader()
    reader.onload = event => {
      console.log(event.target)
      // console.log(event.target.result)
      setPreview(event.target.result)
    }
    reader.readAsDataURL(fileData)
    console.log(preview)
  }

  const saveFile = () => {
    console.warn('prueba del boton')
    const storage = firebase.storage()
    const storageRef = storage.ref()
    const galleryRef = storageRef.child('gallery')
    const uploadTask = galleryRef.child(`${file.name}`).put(file)
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
        setImageUrl(imgUrl)
        if (imageurl) {
          Modal.success({
            content: 'La imagen se guardó exitosamente'
          })
        }
        callback(imageurl)
      })
    })
  }

  return (
    <>
      {preview ? <PreviewRectangle src={preview} /> : null}
      <label
        className={styles.label}
        for='fileInput'
      > 1.Seleccionar archivo
      </label>

      <input
        className={styles.d_none}
        id='fileInput'
        type='file'
        onChange={changeFile}
      />
      {file ? <BtnForm
        typeBtn='btn_secondary_centered' content='2. Subir imagen' handlerClick={saveFile}
      /> : null}
    </>
  )
}
