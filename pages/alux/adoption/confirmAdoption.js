import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import AdoptionForm from '../../../components/Pages/AdoptionForm'
// ant-design
import { Row, Col } from 'antd'
export default function ConfirmAdoption() {
  return (
    <Layout title='Levantar adopción' typeHeader='adoption'>
      <Row justify='center'>
        <Col xs={22} md={22} lg={22}>
          <AdoptionForm />
        </Col>
      </Row>
    </Layout>
  )
}
