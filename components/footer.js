import Link from "next/link";

export default function Footer() {
  const navigation = [
    {
      name: "Protocol",
      link: "/protocol"
    },
    {
      name: "Blog",
      link: "/blog"
    },
    {
      name: "Privacy Policy",
      link: "/privacy-policy"
    }
  ];
  return (
    <footer className="bg-gradient-to-b from-purple-900 to-black">
      <div className="container mx-auto mb-5 pt-10 px-3 flex flex-wrap">
        <div className="lg:w-[50%] lg:pr-20 mb-5">
          <a href="/" className="flex items-center space-x-2 max-w-[150px] md:max-w-[220px] mb-5">
            <span>
              <img
                src="/logo-white.png"
                alt="Somhako"
              />
            </span>
          </a>
          <p className="text-white">
          We are the first protocol-based, decentralized social graph for the HR industry. Use it to discover global talent, access verified candidate data, and find the right fit for your company. Without any mediator, powered by blockchain.
          </p>
        </div>
        <div className="lg:w-[50%] w-full flex flex-wrap">
          <div className="w-[50%] mb-5 pr-10 lg:pr-20">
            <ul>
              {navigation.map((item, index) => (
                <li key={index} className="mb-2">
                    <Link href={item.link}>
                    <a className="inline-block text-white after:content-[''] after:w-[0] hover:after:w-[100%] after:h-[2px] after:bg-white after:block after:transition-all after:ease-in-out">
                        {item.name}
                    </a>
                    </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[50%] mb-5">
            <ul className="text-white">
              <li>
                <a href="https://www.linkedin.com/company/somhako/?viewAsMember=true" target="_blank" className="flex items-center mb-3">
                  <Linkedin />
                  <span className="ml-3">Linkedin</span>
                </a>
              </li>
              <li>
                <a href="https://discord.gg/934TJUe6BF" target="_blank" className="flex items-center mb-3">
                  <Discord />
                  <span className="ml-3">Discord</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/somhako" target="_blank" className="flex items-center mb-3">
                  <Twitter />
                  <span className="ml-3">Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#16082b] py-3">
        <div className="container mx-auto">
          <p className="text-center text-sm text-white">
            Copyright © {new Date().getFullYear()} Somhako
          </p>
        </div>
      </div>
    </footer>
  );
}

const Twitter = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);
const Linkedin = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);
const Discord = ({ size = 16 }) => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  width={size}
    height={size} viewBox="0 0 232.000000 232.000000"
  preserveAspectRatio="xMidYMid meet" fill="currentColor">

  <g transform="translate(0.000000,232.000000) scale(0.100000,-0.100000)"
  fill="currentColor" stroke="none">
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
