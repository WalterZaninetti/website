/* This example requires Tailwind CSS v2.0+ */
import {getRandomLogo} from "../util/RandomUtil";

export default function Underconstruction() {
  return (
      <>
        {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
        <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
          <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 flex justify-center">
              <a href="/" className="inline-flex">
                <span className="sr-only">Workflow</span>
                <img
                    className="h-12 w-auto"
                    src={getRandomLogo()}
                    alt=""
                />
              </a>
            </div>
            <div className="py-8">
              <div className="text-center">
                <h1 className="mt-2 text-4xl font-extrabold text-red-500 tracking-tight sm:text-5xl">Sto ancora lavorando a questa pagina</h1>
                <p className="mt-2 text-base text-black">Torna presto per vedere se ho finito!</p>
                <div className="mt-6">
                  <a href="/" className="text-base font-medium text-red-600 hover:text-indigo-500">
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
  )
}
