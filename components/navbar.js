import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

export default function Navbar() {
  const navigation = ["Features", "Protocol", "Team", "Blog"];
  const solutions = [
    {
      name: "Somhako ATS",
      description: "Next generation applicant tracking system",
      href: "##",
      icon: IconOne,
    },
    {
      name: "Somhako Marketplace",
      description: "Open job marketplace",
      href: "##",
      icon: IconTwo,
    },
    {
      name: "Somhako Protocol",
      description: "Open graph protocol",
      href: "##",
      icon: IconThree,
    },
  ];

  function Products() {
    return (
      <div className="w-full">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                  ${open ? "" : "text-opacity-90"}
                  group inline-flex items-center rounded-md bg-orange-700 px-4 py-2 text-base font-medium text-gray-800 dark:text-gray-300 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span>Products</span>
                <ChevronDownIcon
                  className={`${open ? "" : "text-opacity-70"}
                    ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            <item.icon aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-left">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4">
                      <a
                        href="##"
                        className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <span className="flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-900">
                            Documentation
                          </span>
                        </span>
                        <span className="block text-sm text-gray-500">
                          Start integrating products and tools
                        </span>
                      </a>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    );
  }

  return (
    <header className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 px-4 mx-auto lg:justify-between">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
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

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-700 focus:text-indigo-700 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    <Products />

                    {navigation.map((item, index) => (
                      <Link key={index} href="/">
                        <a className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-700 focus:text-indigo-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                          {item}
                        </a>
                      </Link>
                    ))}
                    <Link href="/">
                      <a className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                        Get Started
                      </a>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          {/* <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <Products />
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/">
                  <a className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-700 focus:text-indigo-700 focus:bg-indigo-100 focus:outline-none">
                    {menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul> */}
        </div>

        <div className="hidden space-x-3 lg:flex nav__item">
          <Link href="/">
            <a className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
            Join the waitlist
            </a>
          </Link>

          {/* <ThemeChanger /> */}
        </div>
      </nav>
    </header>
  );
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // className="bg-indigo-600"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // className="bg-indigo-600"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // className="bg-indigo-600"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
