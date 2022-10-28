import Head from 'next/head';

export default function Whitepaper() {
    return (
      <>
      <Head>
        <title>
        Whitepaper | Somhako
        </title>
        <meta
        name="description"
        content="Make your job search easier with trackable resumes and enhanced applications."
        />
      </Head>
          <div className="py-10">
              <div className="container mx-auto px-3">
                  <h1 className="mb-5 text-3xl text-center lg:text-4xl tracking-tight font-extrabold text-white">
                  Whitepaper
                  </h1>
                  <div className="max-w-[320px] md:max-w-[360px] mx-auto relative overflow-hidden text-center">
                    <iframe src="https://www.canva.com/design/DAFNJ1GIOKo/view?embed" className="h-[450px] md:h-[510px] w-full mb-4" allowfullscreen="allowfullscreen" allow="fullscreen">
                    </iframe>
                    <a href="https://www.canva.com/design/DAFNJ1GIOKo/view" target="_blank" className="inline-block py-2 px-4 text-sm rounded font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500">Open it in new tab</a>
                  </div>
              </div>
          </div>
      </>
    );
  }
  