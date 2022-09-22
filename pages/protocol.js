import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SectionTitle from "../components/sectionTitle";
import { protocolsData } from "../components/data";
import Benefits from "../components/benefits";

export default function Protocol() {
  return (
    <>
      <Navbar />
      <SectionTitle
        title="Protocol"
        idName="recruitment"
      >
        Somhako protocol enables platforms to import existing Somhako networks. Developers may concentrate on providing an outstanding user experience, and leave growth hacking to the protocol!
      </SectionTitle>
      <Benefits data={protocolsData} />
      <Footer />
    </>
  );
}
