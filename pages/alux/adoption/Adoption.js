import CartelPetAdop from '../../../components/cartelPetAdop';
import Layout from '../../../components/Layout';
import { Avatar, Row, Col } from 'antd';

export default function ConfirmAdoption () {
  return (
    <Layout
      title='Adopción'
      image='https://i.dailymail.co.uk/1s/2019/11/18/16/21162158-0-image-a-38_1574094224893.jpg'
    >
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <CartelPetAdop
            namePet='Bruno'
            alertAdop='Adópta a un amigo'
            title='¡Quiero ser tu amigo!'
            date='31-08-2020'
            sex='Macho'
            lugar='Parque Masayoshi Ōhira Country Club Churubusco, Coyoacán, CDMX '
            zice='Pequeño'
            especie='perro'
            señasParticulares='Un poco nervioso, 
pelo corto, mancha negra en la cola.'
            temperamento='alégre - cariñoso'
            Convive='niños - perros'
            color='crema'
            raza='Schnauzer'
            contact='5555555555'
            image='https://i.dailymail.co.uk/1s/2019/11/18/16/21162158-0-image-a-38_1574094224893.jpg'
          />
        </Col>
      </Row>
    </Layout>
  )
}
