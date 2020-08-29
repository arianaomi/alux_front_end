// components
import LayoutCurve from '../components/LayoutCurve';
import Button from '../components/Btn';
import CardsWelcome from '../components/Pages/WelcomePage/CardsWelcome';
import Footer from '../components/Footer';
import AfichePet from '../components/afiche';

// scss
import styles from '../styles/_index.module.scss';
// antd
import { Row, Col } from 'antd';

export default function WelcomePage () {
  return (
<<<<<<< HEAD
    <AfichePet
      namePet='Bruno'
      alertAdop='Adóptame'
      title='¡Ayudame a regresar a casa!'
      date='31-08-2020'
      sex='Macho'
      lugar='Parque  Masayoshi Ōhira 
Country Club Churubusco,
Coyoacán, CDMX '
      zice='Pequeño'
      especie='perro'
      señasParticulares='Color crema, 
pelo corto un poco nervioso, tengo 
una mancha negra en la cola.'
      temperamento='alégre - cariñoso'
      Convive='con niños - familia'
      color='cafe'
      raza='Boxer'
      contact='5555555555'
      image='https://i.dailymail.co.uk/1s/2019/11/18/16/21162158-0-image-a-38_1574094224893.jpg'
    />
=======
    <LayoutCurve>
      <Row>
        <Col xs={24} md={12}>
          <div className={styles.container_logo}>
            <img src='/logoBlue.svg' className={styles.logo} />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className={styles.btn}>
            <Button content='Comenzar' link='/logIn' />
          </div>
          <div className={styles.container}>
            <img src='/people-icon.svg' />
            <p>
              Alux es un sitio dónde amamos a los pequeños amigos animales,
              tenemos el compromiso de ayudarlos a volver a casa, en el caso de
              estar perdidos o poder encontrarle una familia que los ame como se
              merecen .
            </p>
          </div>
        </Col>
        <Col className={styles.imageCol} xs={0} lg={24}>
          <img src='/mascotas.svg' className={styles.image} />
        </Col>
      </Row>
      <Row>
        <Col lg={24}>
          <div className={styles.infoAlux}>
            <p>
              En Alux encontraras una comunidad que ama a estos pequeñitos dónde
              podran compartir sus aventuras, tips, su día a día, conocerlos un
              poco más con nuestro blog.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <CardsWelcome
            image1='/patitadegato.svg'
            image2='/hamster.svg'
            text='En  Alux  nos preocupamos por los    los animalitos.'
          />
        </Col>
        <Col offset={2} xs={20}>
          <div className={styles.wrapper_icons}>
            <div className={styles.icons_title}>
              <img src='/aqui.svg' />
              <h2>Su boleto a casa</h2>
              <img src='/CodeQR.svg' />
            </div>
            <div className={styles.wrapperPhrase}>
              <div>
                <img src='/hombre-pet-icon.svg' />
                <h2>Nos preocupamos por todos los animales</h2>
              </div>
              <div className={styles.ticket}>
                <h2>Familias unidas</h2>
                <img src='/boleto.svg' />
              </div>
              <div>
                <img src='/mujer-pet-icon.svg' />
                <h2>Recomendaciones y cuidados</h2>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24}>
          <CardsWelcome
            image1='/espinas.svg'
            image2='/perritoNegro.svg'
            text='Blogs  para los
            pequeñitos del hogar'
          />
        </Col>
        <Col xs={24}>
          <div className={styles.phraseDog}>
            <img src='/citaperrito1.svg' />
            <img src='/citaperrito2.svg' />
          </div>
        </Col>
        <Col xs={24}>
          <CardsWelcome
            image1='/perritocalle.svg'
            image2='/perritoparque.svg'
            text='Nuestro compromiso: Ayudarlos a volver a casa  o
            encontrarles un hogar '
          />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Footer />
        </Col>
      </Row>
    </LayoutCurve>
>>>>>>> develop
  )
}
