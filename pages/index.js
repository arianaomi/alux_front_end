// components
import LayoutCurve from '../components/LayoutCurve';
import Button from '../components/Btn';
import CardsWelcome from '../components/Pages/WelcomePage/CardsWelcome';
import Footer from '../components/Footer';
// scss
import styles from '../styles/_index.module.scss';
// antd
import { Row, Col } from 'antd';

export default function WelcomePage () {
  return (
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
          <img src='/mascotas.png' className={styles.image} />
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
            image1='/patitadegato.png'
            image2='/hamster.png'
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
            image1='/espinas.png'
            image2='/perritoNegro.png'
            text='Blogs  para los
            pequeñitos del hogar'
          />
        </Col>
        <Col xs={24}>
          <div className={styles.phraseDog}>
            <img src='/citaperrito1.png' />
            <img src='/citaperrito2.png' />
          </div>
        </Col>
        <Col xs={24}>
          <CardsWelcome
            image1='/perritocalle.png'
            image2='/perritoparque.png'
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
  )
}
