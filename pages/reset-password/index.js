import ResetPasswordForm1 from "../../components/Pages/ResetPasswordForm1";
import CurvyHeader from "../../components/CurvyHeader";
import { Row, Col } from "antd";
import Footer from "../../components/Footer";

export default function ResetPassword() {
  return (
    <>
      <Row>
        <Col>
          <CurvyHeader />
        </Col>
      </Row>
      <Row>
        <Col offset={2} xs={20} sm={20} md={10} lg={10}>
          <h1>
            Ingresa tu correo, se enviará una url para generar la nueva
            contraseña
          </h1>
          <ResetPasswordForm1 />
        </Col>
        <Col offset={12} xs={12} sm={12} md={12} lg={12}>
          <div>
            <img src="/perroNewPaswMobil.png" />
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  );
}
