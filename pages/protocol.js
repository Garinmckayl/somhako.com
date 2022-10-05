import { ChevronDoubleRightIcon, } from "@heroicons/react/outline";
import Features from "../components/features";
import React from "react";

export default function Protocol() {
  const protocols = [
    {
      desc: "By using Somhako protocol, users can create digital résumés on the blockchain, and data on the blockchain can be aggregated and used by other applications.",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      desc: "Developers can integrate Somhako Protocol to import somhako existing networks. Developers may concentrate on providing an outstanding user experience and leave growth hacking to the protocol!",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      desc: "Somhako protocol unlocks portability and composability across the industry.",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      desc: "The Somhako Protocol unites entire HR industry. This protocol is designed to help HR professionals establish a one-stop shop for their enterprise-wide hiring process. It applies a more personal approach to recruitment and focuses on hiring individuals that are aligned with the organization's vision, culture, purpose and values.",
      icon: <ChevronDoubleRightIcon />,
    },
  ];
  return (
    <>
      <section className="py-10">
        <div className="max-w-[700px] mx-auto px-3 text-center">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">
          Protocol
          </h1>
          <p className="font-light text-white sm:text-xl">
          Somhako protocol enables platforms to import existing Somhako networks. Developers may concentrate on providing an outstanding user experience, and leave growth hacking to the protocol!
          </p>  
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-3 flex flex-wrap items-center justify-center">
            <div className="lg:w-6/12">
                <div className="relative mb-10 lg:mb-0 max-w-[500px] mx-auto">
                    <img src="/img/network.png" className="rotateAnimation-X" />
                    <img src="/img/network.png" className="rotateAnimation-Y absolute left-0 top-0" />
                </div>
            </div>
            <div className="lg:w-6/12">
              <ul>
                <li>
                  {protocols.map((item, index) => (
                    <div className="flex items-start mt-8 space-x-3">
                      <div className="flex items-center justify-center flex-shrink-0 mt-2 bg-white rounded-md w-9 h-9">
                        {React.cloneElement(item.icon, {
                          className: "w-5 h-5 text-black",
                        })}
                      </div>
                      <div>
                        <p className="mt-1 text-white">
                        {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
        </div>
      </section>
      <Features />
    </>
  );
}
