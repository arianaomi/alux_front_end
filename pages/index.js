import CardGralxl from "../components/cardGeneralXL";
import CompFooter from "../components/componetFooter";
import CardAdoption from "../components/cardAdoption";
import CardLost from "../components/cardLost";

export default function Home() {
  return (
    <div>
      <h1>Alux Team</h1>
      <CardLost />
      <CardAdoption />
      <CardGralxl />
      <CompFooter />
    </div>
  );
}
