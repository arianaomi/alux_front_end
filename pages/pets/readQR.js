import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { readQR } from '../../services'
import { useRouter } from 'next/router'
import { Spin } from 'antd'

export default function ReadQR() {
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
          console.log(data)
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
      {!wasSent && <Spin size='large' />}
      {wasSent && pet && <h1>Mostrar perrito {pet.name}</h1>}
      {wasSent && !pet && <h1>Token invalido</h1>}
    </Layout>
  )
}
