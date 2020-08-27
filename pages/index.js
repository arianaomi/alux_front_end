import CardGralxl from '../components/cardGeneralXL';
import CompFooter from '../components/componetFooter';
import CardAdoption from '../components/cardAdoption';
import CardLost from '../components/cardLost';

// components
import Layout from '../components/Layout';

export default function WelcomePage () {
  return (
    <Layout title='Welcome Page'>
      <h1>Contenido</h1>
      <CardLost />
      <CardAdoption />
      <CardGralxl />
      <CompFooter />
    </Layout>
  )
}
