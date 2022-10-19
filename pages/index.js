import Head from 'next/head';
import Link from "next/link";
import Features from "../components/features";

export default function Home() {
  const stayConnected = [
    {
        url: "https://www.linkedin.com/company/somhako/?viewAsMember=true",
        icon: <Linkedin />,
        name: "LinkedIn"
    },
    {
        url: "https://discord.gg/934TJUe6BF",
        icon: <Discord />,
        name: "Discord"
    },
    {
        url: "https://twitter.com/somhako",
        icon: <Twitter />,
        name: "Twitter"
    }
  ]
  const tokensList = [
    {
        title: 'SOM Utility',
        desc: 'SOM is used for rewarding candidates/users for taking part in the Somhako protocol, referral program, and other community participation and representing votes in governance.'
    },
    {
        title: 'Somhako Protocol rewards',
        desc: 'Somhako will use SOM to reward community actions most importantly when candidates decide to share their profile in the protocol. Additionally for taking part in the referral program, alpha, beta testing, and future community activities. '
    },
    {
        title: 'Governance Voting',
        desc: '$SOM will represent votes and governance decisions related to the token and the Somhako platform in the future.'
    },
    {
        title: 'Transactions',
        desc: 'SOM will be used as one of the core currencies for paying various transactions on the Somhako platform. Some of them would be - token swaps, community contributions, P2P tokenization, Learning, and many more.'
    }
  ]
  return (
    <>
      <Head>
        <title>
        Discover, Connect & Network
        </title>
        <meta
        name="description"
        content="Make your job search easier with trackable resumes and enhanced applications."
        />
      </Head>
      <section id="homeBanner" className="py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-3 flex flex-wrap items-center flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Are You Hiring The Right Talent?
                </h1>
                <p className="text-xl text-white mb-6">
                Don't let your competitors steal the deal. Connect with our global talent network and hire the right one. 
                </p>
                <Link href="https://marketplace.somhako.com/register/">
                    <a className="inline-block py-2 px-4 text-sm rounded font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500">
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
      <section id="resources" className="py-20 min-h-[100vh] flex items-center bg-gradient-to-tr from-blue via-indigo to-black">
        <div className="container mx-auto px-3 flex flex-wrap items-center justify-center">
            <div className="lg:w-[45%]">
                {/* <div className="relative mb-10 lg:mb-0 max-w-[800px] mx-auto">
                    <img src="/img/somhako-laptop.png" />
                </div> */}
            </div>
            <div className="lg:w-[55%] text-center lg:text-left">
                <div className="lg:py-12 md:px-20">
                    <h5 className="text-white text-lg font-medium mb-3">HR INDUSTRY</h5>
                    <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">Redefine Recruitment With Somhako</h2>
                    <p className="text-white italic text-xl">We are the first protocol-based, decentralized social graph for the HR industry. Use it to discover global talent, access verified candidate data, and find the right fit for your company. Without any mediator, powered by blockchain.</p>
                </div>
            </div>
        </div>
      </section>
      <Features />
      <section id="protocol" className="py-20 min-h-[100vh] flex items-center bg-gradient-to-tr from-blue via-indigo to-black">
        <div className="container mx-auto px-3 flex flex-wrap items-center justify-center flex-col-reverse lg:flex-row">
            <div className="lg:w-6/12 lg:pr-10 text-center lg:text-left">
                <h2 className="text-white text-4xl font-bold mb-4">Unlock Portability Across The Industry</h2>
                <p className="text-white text-xl mb-4">Aggregate verified candidate data from our blockchain network and use it across your application. The Somhako protocol enables HR professionals to establish one-stop recruitment for enterprise-wide hiring. Get a more personal touch on your recruitment and onboard individuals who align with your organization's vision, values, and purpose.</p>
                <p className="text-white text-xl mb-4 italic font-bold">Don't let resources stop you from hiring the best. Let Somhako help you hire today for free!</p>
                <Link href="https://marketplace.somhako.com/register/">
                    <a className="inline-block py-2 px-4 text-sm rounded font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500">
                    Sign Up Now
                    </a>
                </Link>
            </div>
            <div className="lg:w-6/12">
              {/* <div className="relative mb-10 lg:mb-0 max-w-[500px] mx-auto">
                  <img src="/img/cube.png" />
              </div>     */}
            </div>
        </div>
      </section>
      <section id="token" className="py-20 pb-[10rem] min-h-[100vh]">
        <div className="container mx-auto px-3">
            <div className="max-w-[1000px] mx-auto w-full">
                <h2 className="text-white text-center text-4xl font-bold mb-4">Somhako Token</h2>
                <p className="text-white text-center italic text-xl mb-10">$OM is a utility token that is going to be used in the Somhako protocol for various different purposes and currently will be on the polygon mainnet.</p>
            </div>
            <div className="flex flex-wrap">
                {tokensList.map((item, index) => (
                    <div className="w-full md:w-3/12 px-3 mb-5" key={index}>
                        <div className="border rounded-lg h-full py-6 px-4 transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500">
                            <h5 className="text-white font-bold text-lg text-center mb-2">{item.title}</h5>
                            <p className="text-white text-center">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
      <section id="connectedUs" className="py-20 min-h-[100vh] flex items-center bg-gradient-to-tr from-blue via-indigo to-black">
        <div className="max-w-[1000px] w-full mx-auto px-3">
            <h2 className="text-white text-center text-4xl font-bold mb-10">Stay Connected With Us!</h2>
            <div className="flex flex-wrap m">
                {stayConnected.map((item, index) => (
                    <div className="w-full md:w-4/12 px-3 mb-5" key={index}>
                        <a href="https://www.linkedin.com/company/somhako/?viewAsMember=true" target="_blank" className="flex items-center justify-center flex-col border rounded-lg min-h-[200px] lg:min-h-[350px] py-6 px-4 transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500">
                            {item.icon}
                            {/* <a className="mt-5 block min-w-[200px] text-center py-2 px-4 text-sm rounded font-bold text-white bg-gradient-to-r from-purple-700 to-blue-700 hover:from-blue-900 hover:to-purple-900">{item.name}</a> */}
                        </a>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}


const Twitter = ({ size = 60 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#fff"
    >
      <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
    </svg>
  );
const Linkedin = ({ size = 60 }) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#fff"
>
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
</svg>
);
const Discord = ({ size = 60 }) => (
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width={size}
    height={size} viewBox="0 0 232.000000 232.000000"
preserveAspectRatio="xMidYMid meet" fill="#fff">

<g transform="translate(0.000000,232.000000) scale(0.100000,-0.100000)"
fill="#fff" stroke="none">
<path d="M970 2305 c-171 -30 -372 -116 -507 -217 -245 -185 -412 -474 -454
-785 -14 -103 -7 -278 15 -378 76 -351 298 -639 616 -800 502 -253 1108 -110
1452 344 64 85 151 262 182 372 81 286 55 563 -78 834 -166 336 -481 569 -856
631 -103 17 -268 17 -370 -1z m-16 -592 l17 -38 179 0 179 0 17 38 c9 20 20
37 23 37 26 -1 152 -36 225 -62 84 -31 91 -36 121 -83 50 -77 112 -207 140
-289 43 -127 56 -205 62 -372 l6 -160 -84 -54 c-92 -59 -240 -128 -291 -136
-31 -5 -35 -2 -70 55 -21 34 -38 64 -38 68 1 5 28 20 62 36 45 20 59 30 50 39
-8 8 -29 4 -80 -15 -202 -75 -442 -75 -644 0 -51 19 -72 23 -80 15 -9 -9 5
-19 50 -39 34 -16 61 -31 62 -36 1 -21 -77 -127 -93 -127 -22 0 -178 63 -227
92 -19 12 -63 39 -97 61 l-63 39 0 123 c0 251 69 487 202 695 33 51 41 57 113
84 68 26 200 63 231 65 6 1 19 -16 28 -36z"/>
<path d="M829 1237 c-84 -56 -91 -176 -14 -247 21 -20 37 -25 80 -25 60 0 97
25 121 82 41 95 -27 213 -121 213 -18 0 -47 -10 -66 -23z"/>
<path d="M1339 1237 c-84 -56 -91 -176 -14 -247 21 -20 37 -25 80 -25 60 0 97
25 121 82 41 95 -27 213 -121 213 -18 0 -47 -10 -66 -23z"/>
</g>
</svg>

);
