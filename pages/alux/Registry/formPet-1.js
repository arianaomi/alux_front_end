// ant-design
import { Row, Col } from "antd";
// components
import PetForm1 from "../../../components/Pages/PetForm1";
import Btn from "../../../components/Btn";
import LayoutCurve from "../../../components/LayoutCurve";
import Footer from "../../../components/Footer";

export default function FormPet1() {
  return (
    <>
      <LayoutCurve title="Tu mascota">
        <Row justify="center">
          <Col xs={10} md={12} lg={12}>
            <PetForm1 />
          </Col>
        </Row>
        <Footer />
      </LayoutCurve>
    </>
  );
}
