import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { readQR } from '../../services'
import { useRouter } from 'next/router'

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
    <Layout title='hola'>
      {!wasSent && <h1>Cargando...</h1>}
      {wasSent && pet && <h1>Mostrar perrito perdido {pet.name} </h1>}
      {wasSent && !pet && <h1>Token invalido</h1>}
    </Layout>
  )
}
