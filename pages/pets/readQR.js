import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { readQR } from '../../services'
import { useRouter } from 'next/router'
import { Spin } from 'antd'

export default function ReadQR () {
  const router = useRouter()
  const [coords, setCoords] = useState(null)
  const [wasSent, setWasSent] = useState(false)
  const [pet, setPet] = useState(null)
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords
        setCoords({ latitude, longitude })
      },
      error => {
        window.alert(error)
        setCoords({ latitude: null, longitude: null })
      }
    )
  }, [])

  useEffect(() => {
    const { token } = router.query
    if (coords && token) {
      ;(async () => {
        try {
          const { data } = await readQR(token, coords)
          setPet(data)
        } catch (e) {
          // TODO: Handle error or 404
          console.log(e)
        } finally {
          setWasSent(true)
        }
      })()
    }
  }, [coords, router])

  return (
    <>
      {!wasSent && (
        <Layout title='Mascota perdida' typeHeader='alert'>
          <Spin
            size='large'
            tip='Permite acceder a tu ubicación para que el dueño tenga información sobre su mascota '
          />{' '}
        </Layout>
      )}
      {wasSent && pet && (
        <Layout title={` Cartel de ${pet.name} `} typeHeader='alert'>
          <h1>Mostrar perrito perdido {pet.name} </h1>{' '}
        </Layout>
      )}
      {wasSent && !pet && (
        <Layout title=' Mascota no registrada' typeHeader='alert'>
          <h1>Mascota no registrada</h1>
        </Layout>
      )}
    </>
  )
}
