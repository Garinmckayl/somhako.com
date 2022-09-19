import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Somhako</title>
        <meta name="description" content="somhako" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="SOMHAKO"
        title="How it is different?"
      >
        SOMHAKO aims to unite the entire HR industry through a protocol-based, composable, and decentralized social graph. Somhako provides different incentives mechanisms for the growth of the Somhako marketplace by indexing and syncing candidate data on the blockchain network. 
      </SectionTitle>
      <Benefits data={benefitOne} />
      <SectionTitle
        pretitle="SOMHAKO"
        title="Protocol"
        idName="protocol"
      >
        By using Somhako protocol, users can create digital résumés on the blockchain, and data on the blockchain can be aggregated and used by other applications.<br /><br />
        Developers can integrate Somhako Protocol to import somhako existing networks. Developers may concentrate on providing an outstanding user experience and leave growth hacking to the protocol! <br /><br />
        Somhako protocol unlocks portability and composability across the industry.
      </SectionTitle>
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        ventore veritatis et quasi architecventore veritatis et quasi
        architecventore veritatis et quasi architecventore veritatis et quasi
        architecventore veritatis et quasi architec
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        ventore veritatis et quasi architecventore veritatis et quasi architec
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        ventore veritatis et quasi architecventore veritatis et quasi architec
      </SectionTitle> */}
      {/* <Faq /> */}
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}
