// components
import { useEffect, useState } from "react";
import absoluteUrl from "next-absolute-url";
import LayoutCurve from "../../../components/LayoutCurve";
import Btn from "../../../components/Btn";
// sass
import styles from "../../../styles/alux/codeQR/_generateQR.module.scss";
// ant-design
import { Row, Col } from "antd";
import { getPet } from "../../../services";
import QRCode from "../../../components/QRCode";
import { useRouter } from "next/router";

function GenerateQR({ origin }) {
  const router = useRouter();
  const petUrl = `${origin}/pets/readQR?token=`;

  const [pet, setPet] = useState(null);

  console.log(petUrl);

  useEffect(() => {
    console.log(router.query.id);
    if (router.query.id) {
      (async () => {
        try {
          const { data } = await getPet(router.query.id);
          console.log(data);
          setPet(data);
        } catch {
          // TODO: handle 404
        }
      })();
    }
  }, [router.query.id]);

  //console.log(pet)

  return (
    <LayoutCurve title="QR personalizado">
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className={styles.dog_QR}>
            <img src="/dogQR.svg" />
            <div className={styles.codeQR}>
              <h1>QR</h1>
              {Boolean(pet) && <QRCode value={`${petUrl}${pet.token}`} />}
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className={styles.wrapperBtn}>
            <a>Descargar código QR</a>
            <div className={styles.btn}>
              <Btn
                content="Comprar placa"
                typeBtn="btn_secondary"
                link="/alux/CodeQR/generateQR"
              />
            </div>
            <div className={styles.btn}>
              <Btn
                content="Terminar Registro"
                typeBtn="btn_primary"
                link="/alux/home"
              />
            </div>
          </div>
        </Col>
      </Row>
    </LayoutCurve>
  );
}

GenerateQR.getInitialProps = ({ req }) => {
  let { origin } = absoluteUrl(req, "localhost:3000");
  //ToDo: no es necesario cuando cuando ya tiene https: CHECAR
  origin = origin.includes(":3000") ? origin.replace("https", "http") : origin;
  return { origin };
};

export default GenerateQR;
