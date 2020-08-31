import CartelPetAlert from '../../../components/cartelPetAlet';
import Layout from '../../../components/Layout';
import { Avatar, Row, Col } from 'antd';

export default function ConfirmAlert () {
  return (
    <Layout
      title='Alerta'
      image='https://i.dailymail.co.uk/1s/2019/11/18/16/21162158-0-image-a-38_1574094224893.jpg'
    >
      <Row>
        <Col span={1} offset={3} xs={20} sm={20} md={20} lg={20}>
          <CartelPetAlert
            namePet='Micha'
            alertAdop='Ayúdame a volver a casa'
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
            image='https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg?itok=zmmJgd_3'
          />
        </Col>
      </Row>
    </Layout>
  )
}
