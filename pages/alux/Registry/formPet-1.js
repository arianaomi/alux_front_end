// ant-design
import { Row, Col } from "antd";
// components
import PetForm1 from "../../../components/Pages/PetForm1";
import Btn from "../../../components/Btn";
import LayoutCurve from "../../../components/LayoutCurve";
import Footer from "../../../components/Footer";
import styles from "../../../styles/_formPet-1.module.scss";
export default function FormPet1() {
  return (
    <>
      <LayoutCurve title="Tu mascota">
        <Row justify="center">
          <Col xs={10} md={12} lg={12}>
            <PetForm1 />
          </Col>
          <Col offset={4} xs={20} sm={20} md={20} lg={20}>
            <Btn content="regresar" typeBtn="btn_secondary" link="/signUp" />
          </Col>

          <Col xs={20} sm={20} md={10} lg={10}>
            <div>
              <img src="/ratonMobilCuatro.svg" />
            </div>
          </Col>
        </Row>
        <Footer />
      </LayoutCurve>
    </>
  );
}
