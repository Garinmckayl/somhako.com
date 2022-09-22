import Link from "next/link";
import Benefits from "../components/benefits";
import { howitworks} from "../components/data";

export default function HowItWorks() {
  return (
    <>
      <section className="container p-8 px-4 mx-auto flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white mb-4">
            Why <span className="text-blue-700">10,000+</span> People Trust On Somhako?
            </h1>
            <h2 className="font-bold text-xl text-gray-800">Find jobs, create trackable resumes and enrich your applications</h2>
            <p className="py-5 leading-normal text-gray-500 dark:text-gray-300">
            Start working with Somhako that can provide everything you need to generate awareness, drive traffic, connect.
            </p>
            <Link href="https://marketplace.somhako.com/register/">
              <a className="px-6 py-2 inline-block text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
              Join Today
              </a>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="hidden lg:block">
            <img src="/img/somhako-art.png" alt="Somhako" />
          </div>
        </div>
      </section>
      <Benefits data={howitworks} />
    </>
  );
}
