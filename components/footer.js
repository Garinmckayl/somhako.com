import Link from "next/link";
import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Team", "Blog"];
  return (
    <footer className="relative border-t border-gray-100 dark:border-trueGray-700">
      <div className="container p-8 px-4 mx-auto">
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/">
              <a className="flex items-center space-x-2 max-w-[150px] md:max-w-[220px]">
                <span>
                  <img
                    src="/logo.png"
                    alt="Somhako"
                  />
                </span>
              </a>
            </Link>
            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
            We are the first protocol-based, decentralized social graph for the HR industry. Use it to discover global talent, access verified candidate data, and find the right fit for your company. Without any mediator, powered by blockchain.
            </div>
          </div>
          <div>
            {/* <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link key={index} href="/">
                  <a className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-700 focus:text-indigo-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                    {item}
                  </a>
                </Link>
              ))}
            </div> */}
          </div>
          <div>
            {/* <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link key={index} href="/">
                  <a className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-700 focus:text-indigo-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                    {item}
                  </a>
                </Link>
              ))}
            </div> */}
          </div>
          <div className="lg:text-right">
            <div>Follow us</div>
            <div className="flex lg:justify-end mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a href="https://www.linkedin.com/company/somhako/?viewAsMember=true" target="_blank" rel="noopener">
                <Linkedin />
                <span className="sr-only">Linkedin</span>
              </a>
              {/* <a
                href="#"
                target="_blank"
                rel="noopener"
              >
                <Facebook />
                <span className="sr-only">Facebook</span>
              </a> */}
              <a
                href="https://discord.gg/XkajwnGG"
                target="_blank"
                rel="noopener"
              >
                <Discord />
                <span className="sr-only">Discord</span>
              </a>
              <a
                href="https://twitter.com/somhako"
                target="_blank"
                rel="noopener"
              >
                <Twitter />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-2 mx-auto">
        <div className="lg:grid grid-cols-2 gap-4 align-middle">
          <p className="text-center lg:text-left text-sm text-gray-600 dark:text-gray-400">
            Copyright © {new Date().getFullYear()} Somhako
          </p>
          <aside className="flex justify-center lg:justify-end">
            <Link href="/privacy-policy">
              <a className="text-gray-500 text-sm rounded-md dark:text-gray-300 hover:text-indigo-700 focus:text-indigo-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                Privacy Policy
              </a>
            </Link>
          </aside>
        </div>
      </div>
    </footer>
  );
}

const Twitter = ({ size = 24 }) => (
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

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
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

const Discord = ({ size = 26 }) => (
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
