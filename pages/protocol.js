import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SectionTitle from "../components/sectionTitle";

export default function Protocol() {
  return (
    <>
      <Navbar />
      <SectionTitle
        title="Protocol"
        idName="recruitment"
      >
        Somhako protocol enables platforms to import existing Somhako networks. Developers may concentrate on providing an outstanding user experience, and leave growth hacking to the protocol!
      </SectionTitle>
      <section className="container p-8 px-4 mx-auto flex flex-wrap">
        <div className="flex items-center justify-center w-full lg:w-1/2">
            <img src="/img/somhako-protocol.png" alt="Somhako" />
        </div>
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <p className="mb-2 leading-normal text-gray-500 dark:text-gray-300">
            By using Somhako protocol, users can create digital résumés on the blockchain, and data on the blockchain can be aggregated and used by other applications.
            </p>
            <p className="mb-2 leading-normal text-gray-500 dark:text-gray-300">
            Developers can integrate Somhako Protocol to import somhako existing networks. Developers may concentrate on providing an outstanding user experience and leave growth hacking to the protocol! 
            </p>
            <p className="mb-2 leading-normal text-gray-500 dark:text-gray-300">
            Somhako protocol unlocks portability and composability across the industry.
            </p>
            <p className="mb-2 leading-normal text-gray-500 dark:text-gray-300">
            The Somhako Protocol unites entire HR industry. This protocol is designed to help HR professionals establish a one-stop shop for their enterprise-wide hiring process. It applies a more personal approach to recruitment and focuses on hiring individuals that are aligned with the organization's vision, culture, purpose and values.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
