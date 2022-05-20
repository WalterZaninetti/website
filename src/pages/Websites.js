import NavigationBar from "../components/layouts/navigation/NavigationBar";
import Footer from "../components/layouts/navigation/Footer";
import React from "react";
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'
import banner from "../static/photos/bannerweb.jpg"
import book from "../static/icons/book.svg"
import service from "../static/icons/technical-support.svg"
import vacation from "../static/icons/vacation.svg"



export default function Websites() {

    const supportLinks = [
        {
            name: 'Libreria Colibri',
            href: 'https://libreriacolibricuorgne.com',
            description:
                'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
            icon: book,
        },
        {
            name: 'Lufteco Service',
            href: 'https://lufteco.it/',
            description:
                'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
            icon: service,
        },
        {
            name: 'Villa Mafi - Villa dea del salento',
            href: '#',
            description:
                'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
            icon: vacation,
        },
    ]
  return (
    <div className="bg-walter-light">
      <NavigationBar />
      <main>
        <div className="bg-walter-light">
          {/* Header */}
          <div className="relative pb-32 bg-gray-800">
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover"
                src={banner}
                alt=""
              />
              <div
                className="absolute inset-0 bg-gray-600 mix-blend-multiply"
                aria-hidden="true"
              />
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Websites
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-walter-light">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                  lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                  fugiat aliqua.
              </p>
            </div>
          </div>

          {/* Overlapping cards */}
          <section
            className="-mt-32 max-w-7xl mx-auto relative z-10 pb-16 px-4 sm:px-6 lg:px-8"
            aria-labelledby="contact-heading"
          >
            <h2 className="sr-only" id="contact-heading">
              Contact us
            </h2>
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
              {supportLinks.map((link) => (
                <div
                  key={link.name}
                  className="flex flex-col bg-walter-blue rounded-2xl shadow-xl"
                >
                  <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                    <div className="absolute top-0 p-5 inline-block bg-walter-green rounded-xl shadow-lg transform -translate-y-1/2">
                      <img
                        className="h-10 w-10 text-black"
                        aria-hidden="true"
                        src={link.icon}
                        alt="icons"
                      />
                    </div>
                    <h3 className="text-xl font-medium text-walter-light">
                      {link.name}
                    </h3>
                    <p className="mt-4 text-base text-walter-light">
                      {link.description}
                    </p>
                  </div>
                  <div className="p-6 bg-walter-green text-center rounded-bl-2xl hover:bg-green-700 rounded-br-2xl md:px-8">
                    <a
                      href={link.href}
                      className="text-base font-medium text-walter-light hover:text-black"
                    >
                      Vai al sito
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
