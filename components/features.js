export default function Features() {
    const features = [
        {
          title: "All The Features You Will Ever Need",
          desc: "Connect with an amazing tech community and build teams globally. Let candidates learn, refer, and get rewarded for every action they take.",
          extraClasses: '',
        },
        {
            title: "Smart AI-based Matchmaking",
            desc: "Get matched with the right candidates, without worrying about the authenticity of their details. Our AI analyzes the resumes and finds the ideal candidates for the role, saving you hours of time.",
            extraClasses: '',
        },
        {
            title: "Trust The Blockchain Technology",
            desc: "Every candidate's data is stored on our blockchain network. Access verified details and incentivize candidates directly no intermediary, more control.",
            extraClasses: '',
        },
        {
            title: "Share Data, On Demand",
            desc: "By revealing your profile identity, engaging, referring, and learning, users can earn reward.",
            extraClasses: '',
        },
        {
            title: "Access Talents, Your Way",
            desc: "Integrate Somhako Protocol and import all our existing networks to your platform. Let us handle the growth hacking while you focus on the user experience.",
            extraClasses: '',
        },
    ];
    return (
        <>
        <section id="features" className="py-20 min-h-[100vh] flex items-center bg-gradient-to-b from-purple to-black">
            <div className="container mx-auto px-3">
                <h2 className="text-white text-3xl lg:text-4xl font-bold mb-10 lg:mb-20 text-center">All The Features You Will Ever Need</h2>
                <div className="flex flex-wrap items-start">
                    {/* <div className="md:w-[50%] sticky top-[0] h-[650px] flex items-center justify-center">
                     <img src="/img/som-features.jpg" className="mx-auto block h-full" />
                    </div> */}
                    <div className="md:w-[100%]">
                        <div className="flex flex-wrap justify-center">
                            {features.map((item, index) => (
                                <div className={`${item.extraClasses} w-[100%] sm:w-[calc(100%/2)] md:w-[calc(100%/3)] lg:w-[calc(100%/5)] px-3 mb-7 lg:mb-0`} key={index}>
                                    <div className="border rounded-lg h-full py-6 px-4 transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500">
                                        <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                                        <p className="text-sm text-white">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}