import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne} from "../components/data";
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
        title="Redefine Recruitment With Somhako"
        idName="recruitment"
      >
        We are the first protocol-based, decentralized social graph for the HR industry. Use it to discover global talent, access verified candidate data, and find the right fit for your company. Without any mediator, powered by blockchain.
      </SectionTitle>
      <Benefits idName="features" data={benefitOne} />
      <SectionTitle
        pretitle="SOMHAKO"
        title="Unlock Portability Across The Industry"
        idName="protocol"
        btn="Sign Up Now"
        btnURL="https://marketplace.somhako.com/register/"
      >
        Aggregate verified candidate data from our blockchain network and use it across your application. The Somhako protocol enables HR professionals to establish one-stop recruitment for enterprise-wide hiring. Get a more personal touch on your recruitment and onboard individuals who align with your organization's vision, values, and purpose.
        <br /><br />
        Don't let resources stop you from hiring the best. Let Somhako help you hire today for free!
      </SectionTitle>
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
