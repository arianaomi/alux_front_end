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
  )
}
