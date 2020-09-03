import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// componets
import Layout from '../../components/Layout'
import CartelPetAlert from '../../components/cartelPetAlet'
// ant-d
import { Spin, Row, Col } from 'antd'
// sass
import styles from '../../styles/pets/_readQR.module.scss'
// services
import { readQR } from '../../services'

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
          // console.log(data)
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
          <Row justify='center'>
            <Col xs={22} md={20} lg={20}>
              <div className={styles.spin}>
                <Spin
                  size='large'
                  tip='Permite acceder a tu ubicación para que el dueño tenga información sobre su mascota '
                />
              </div>
            </Col>
          </Row>
        </Layout>
      )}
      {wasSent && pet && (
        <Layout title={` Cartel de ${pet.name} `} typeHeader='alert'>
          <Row justify='center'>
            <Col xs={22} md={22} lg={22}>
              <CartelPetAlert
                data={pet}
                // image='/perritoNegro.png'
                // namePet={pet.name}
                // date='23/09/19'
                // sex={pet.sex}
                // lugar=''
                // zice={pet.size}
                // especie={pet.species}
                // señasParticulares={pet.particularSigns}
                // color={pet.color}
                // raza={pet.breed}
                // contact={pet.owner.email}
              />
            </Col>
          </Row>
        </Layout>
      )}
      {wasSent && !pet && (
        <Layout title=' Mascota no registrada' typeHeader='alert'>
          <Row justify='center'>
            <Col xs={22} md={20} lg={20}>
              <h1>Mascota no registrada</h1>
            </Col>
          </Row>
        </Layout>
      )}
    </>
  )
}
