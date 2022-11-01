import Link from "next/link";
import { Disclosure} from "@headlessui/react";

export default function Navbar() {
  const navigation = [
    {
      name: "Resources",
      link: "/#resources"
    },
    {
      name: "Features",
      link: "/#features"
    },
    {
      name: "Protocol",
      link: "/protocol"
    },
    {
      name: "Blog",
      link: "/blog"
    },
    {
      name: "Career",
      link: "https://advantf.com/recruitment/"
    },
    {
      name: "Whitepaper",
      link: "/whitepaper"
    }
  ];
  return (
    <>
      <header className="py-5">
        <div className="container mx-auto px-3">
          <div className="hidden lg:flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2 max-w-[150px] md:max-w-[220px]">
              <span>
                <img
                  src="/logo-white.png"
                  alt="Somhako"
                />
              </span>
            </a>
            <aside className="flex items-center hidden lg:flex">
              <ul className="flex">
                  {navigation.map((item, index) => (
                  <li key={index} className="mx-6">
                      <Link href={item.link}>
                      <a className="inline-block text-white after:content-[''] after:w-[0] hover:after:w-[100%] after:h-[2px] after:bg-white after:block after:transition-all after:ease-in-out">
                          {item.name}
                      </a>
                      </Link>
                  </li>
                  ))}
              </ul>
              <Link href="https://marketplace.somhako.com/candidate">
                  <a className="inline-block py-2 px-4 text-sm rounded font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500">
                  Sign Up Now
                  </a>
              </Link>
            </aside>
          </div>
          <Disclosure>
            {({ open }) => (
              <>
                <div className="lg:hidden flex flex-wrap items-center justify-between">
                  <a href="/" className="flex items-center space-x-2 max-w-[150px] md:max-w-[220px]">
                    <span>
                      <img
                        src="/logo-white.png"
                        alt="Somhako"
                      />
                    </span>
                  </a>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fill="white"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                        fill="white"
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="flex flex-wrap w-full mt-5 bg-purple-900 pt-2 p-8 lg:hidden">
                    <>
                    <aside>
                      <ul>
                          {navigation.map((item, index) => (
                          <li key={index} className="my-6">
                              <Link href={item.link}>
                              <a className="inline-block text-white after:content-[''] after:w-[0] hover:after:w-[100%] after:h-[2px] after:bg-white after:block after:transition-all after:ease-in-out">
                                  {item.name}
                              </a>
                              </Link>
                          </li>
                          ))}
                      </ul>
                      <Link href="https://marketplace.somhako.com/candidate">
                          <a className="inline-block py-2 px-4 text-sm rounded font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500">
                          Sign Up Now
                          </a>
                      </Link>
                    </aside>
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>
        </div>
      </header>
    </>
  );
}