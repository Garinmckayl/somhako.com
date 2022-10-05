import Link from "next/link";
import Features from "../components/features";

export default function Home() {
  const features = [
      {
        title: "All The Features You Will Ever Need",
        desc: "Connect with an amazing tech community and build teams globally. Let candidates learn, refer, and get rewarded for every action they take.",
        extraClasses: 'lg:mt-[150px]',
      },
      {
          title: "Smart AI-based Matchmaking",
          desc: "Get matched with the right candidates, without worrying about the authenticity of their details. Our AI analyzes the resumes and finds the ideal candidates for the role, saving you hours of time.",
          extraClasses: 'lg:mt-[75px]',
      },
      {
          title: "Trust The Blockchain",
          desc: "Every candidate's data is stored on our blockchain network. Access verified details and incentivize candidates directly—no intermediary, more control.",
          extraClasses: '',
      },
      {
          title: "Share Data, On Demand",
          desc: "By revealing your profile identity, engaging, referring, and learning, users can earn reward.",
          extraClasses: 'lg:mt-[75px]',
      },
      {
          title: "Access Talents, Your Way",
          desc: "Integrate Somhako Protocol and import all our existing networks to your platform. Let us handle the growth hacking while you focus on the user experience.",
          extraClasses: 'lg:mt-[150px]',
      },
  ];
  return (
    <>
      <section className="py-20 flex items-center min-h-[80vh]">
        <div className="container mx-auto px-3 flex flex-wrap items-center flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Are You Hiring The Right Talent?
                </h1>
                <p className="text-xl text-white mb-6">
                Don't let your competitors steal the deal. Connect with our global talent network and hire the right one. 
                </p>
                <Link href="https://marketplace.somhako.com/register/">
                    <a className="inline-block bg-transparent py-2 px-4 text-sm text-white rounded font-bold border border-white border-solid hover:bg-white hover:text-black">
                    Get Started
                    </a>
                </Link>
            </div>
            <div className="lg:w-1/2">
                <div className="scene mx-auto mb-10 lg:mb-0">
                    <div className="wrapper">
                        <ul className="ball">
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        <li className="ring"></li>
                        </ul>
                    </div>
                </div> 
            </div>
        </div>
      </section>
      <section id="resources" className="py-20 flex items-center bg-gradient-to-tr from-blue via-indigo to-black">
        <div className="container mx-auto px-3 flex flex-wrap items-center justify-center">
            <div className="lg:w-2/5">
                <div className="relative mb-10 lg:mb-0 max-w-[500px] mx-auto">
                    <img src="/img/somhako-laptop.png" />
                </div>
            </div>
            <div className="lg:w-3/5 text-center lg:text-left">
                <div className="lg:py-12 md:px-20">
                    <h5 className="text-white text-lg font-medium mb-3">HR INDUSTRY</h5>
                    <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">Redefine Recruitment With Somhako</h2>
                    <p className="text-white italic text-xl">We are the first protocol-based, decentralized social graph for the HR industry. Use it to discover global talent, access verified candidate data, and find the right fit for your company. Without any mediator, powered by blockchain.</p>
                </div>
            </div>
        </div>
      </section>
      <Features />
      <section className="py-20 flex items-center bg-gradient-to-tr from-blue via-indigo to-black">
        <div className="container w-full mx-auto px-3 flex flex-wrap items-center justify-center flex-col-reverse lg:flex-row">
            <div className="lg:w-6/12 lg:pr-10 text-center lg:text-left">
                <h2 className="text-white text-4xl font-bold mb-4">Unlock Portability Across The Industry</h2>
                <p className="text-white text-xl mb-4">Aggregate verified candidate data from our blockchain network and use it across your application. The Somhako protocol enables HR professionals to establish one-stop recruitment for enterprise-wide hiring. Get a more personal touch on your recruitment and onboard individuals who align with your organization's vision, values, and purpose.</p>
                <p className="text-white text-xl mb-4 italic font-bold">Don't let resources stop you from hiring the best. Let Somhako help you hire today for free!</p>
                <Link href="https://marketplace.somhako.com/register/">
                    <a className="inline-block bg-transparent py-2 px-4 text-sm text-white rounded font-bold border border-white border-solid hover:bg-white hover:text-black">
                    Sign Up Now
                    </a>
                </Link>
            </div>
            <div className="lg:w-6/12">
              <div className="relative mb-10 lg:mb-0 max-w-[500px] mx-auto">
                  <img src="/img/cube.png" />
              </div>    
            </div>
        </div>
      </section>
    </>
  );
}
