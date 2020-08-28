import CardGralxl from '../components/cardGeneralXL'
import CompFooter from '../components/componetFooter'
import CardAdoption from '../components/cardAdoption'
import CardLost from '../components/cardLost'

// components
import Layout from '../components/Layout'
import { Row, Col } from 'antd'

export default function WelcomePage () {
  return (
    <Layout title='Welcome Page'>
      <Row>
        <Col xs={24}>
          ;<h1>Contenido</h1>
          <CardLost
            image='https://www.elcomercio.com/files/article_main/uploads/2019/11/19/5dd46f53c97eb.jpeg'
            namePet='Peluso'
            date='27.08.2020'
            place='CDMX'
          />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <CardAdoption
            image='https://es.calcuworld.com/wp-content/uploads/sites/2/2019/01/cual-es-esperanza-vida-patos.jpg'
            namePet='Lucas'
            info='cariñoso-jugueton'
            place='CDMX'
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <CardGralxl
            title='Un día en el espacio'
            namePet='Luno'
            image='https://image.freepik.com/vector-gratis/super-heroe-astronauta-gato-linda-cara-fondo-espacio_7130-1255.jpg'
            text='Lorem ipsum dolor sit amet, sed eiusmod tempor incididunt ut labore et
            dolore magna aliqua.'
          />
        </Col>
        <Col xs={24}>
          <CompFooter />
        </Col>
      </Row>
    </Layout>
  )
}
