import HeaderRectan from '../../components/HeaderRectan'
import { Avatar, Row, Col, Form, Input, InputNumber, Button } from 'antd'
import Footer from '../../components/Footer'
import AvatarCmptn from '../../components/AvatarCmpnt'
import CardGralxl from '../../components/cardGeneralXL'
import styles from '../../styles/_PetProfile.module.scss'
/*{ title, image, namePet, text }*/
export default function PestId(imagePet) {
  return (
    <>
      <Row>
        <Col xs={24}>
          <HeaderRectan />
        </Col>
      </Row>
      <Row justify="center" >
        <Col xs={24} sm={24} md={22} lg={19} xl={19}>
          <div className={styles.continerpicProfilePet}>
            <div className={styles.picProfilePet}>
              <div className={styles.containerAv}>
                <AvatarCmptn className={styles.picAvatar} src={imagePet} />
              </div>
              <div className={styles.containerNom}>
                <p className={styles.NomPet}>Luno</p>
              </div>
              <div className={styles.continerTextProfilePet}>
                <p className={styles.textDescPet}>
                  Soy un gatito muy travieso, me gusta salir con los gatitos de barrio, con mi novia y darnos unos besos. Noy fan de la leche y mis laitas de carne. Pronto conquistaré el mundo.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.galeryPicContainer}>
            <div className={styles.galeryPic}>
              <img className={styles.picsUser} src='https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
              <img className={styles.picsUser} src='https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
              <img className={styles.picsUser} src='https://images.pexels.com/photos/62640/pexels-photo-62640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
            </div>
            <div className={styles.galeryPic}>
              <img className={styles.picsUser} src='https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
              <img className={styles.picsUser} src='https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
              <img className={styles.picsUser} src='https://images.pexels.com/photos/53813/pexels-photo-53813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
            </div>
          </div>
          <div className={styles.containerCards}>
            <div className={styles.containerUnG}>
              <CardGralxl />
              <CardGralxl />
            </div>
            <div className={styles.containerUnG}>
              <CardGralxl />
              <CardGralxl />
            </div>
            <div className={styles.containerUnG}>
              <CardGralxl />
              <CardGralxl />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Footer />
        </Col>
      </Row>
    </>
  )
}
