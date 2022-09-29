import SectionTitle from "../components/sectionTitle";
import { protocolsData } from "../components/data";
import Benefits from "../components/benefits";

export default function Protocol() {
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
      <SectionTitle
        title="Protocol"
        idName="recruitment"
      >
        Somhako protocol enables platforms to import existing Somhako networks. Developers may concentrate on providing an outstanding user experience, and leave growth hacking to the protocol!
      </SectionTitle>
      <Benefits data={protocolsData} />
      <section id="features" className="py-10 min-h-screen flex items-center bg-gradient-to-b from-purple to-black">
        <div className="max-w-[1600px] w-full mx-auto px-3">
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-10 lg:mb-20 text-center">All The Features You Will Ever Need</h2>
            <div className="flex flex-wrap justify-center">
                {features.map((item, index) => (
                    <div className={`${item.extraClasses} w-[100%] sm:w-[calc(100%/2)] md:w-[calc(100%/3)] lg:w-[calc(100%/5)] px-3 mb-7 lg:mb-0`}  key={index}>
                        <div className="border rounded-2xl h-full py-6 px-4 text-center transition-all duration-300 hover:translate-y-3">
                            <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                            <p className="text-sm text-white">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
