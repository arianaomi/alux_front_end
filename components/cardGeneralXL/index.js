import React from "react";
import styles from "./cardGralxl.module.scss";
import { Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function CardGralxl() {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24}>
        <div className={styles.containerPrin}>
          <div className={styles.containerCardG}>
            <Avatar size={65} icon={<UserOutlined />} />
            <div className={styles.textcontainer}>
              <h3 className={styles.TextTitle}>Un día en el parque</h3>
              <h4 className={styles.TextName}>Luno</h4>
            </div>
          </div>
          <div>
            <img className={styles.imageCarg} src="/ChiPark.jpg" />
          </div>
          <div className={styles.textCard}>
            <p>
              Lorem ipsum dolor sit amet, sed eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <div className={styles.iconCard}>
              <div className={styles.iconCardUD}>
                <img className={styles.heartC} src="/Heart.svg" />
              </div>
              <div className={styles.iconCardUD}>
                <img className={styles.patitasC} src="/patitasCard.svg" />
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
