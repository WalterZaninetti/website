import React from "react";
import mia_foto from "../../static/photos/io.jpg"
import twitch from "../../static/icons/twitch.svg";
export default function HeroSection() {
  return (
      <div className="relative">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0 opacity-75">
              <img
                  className="h-full w-full object-cover"
                  src={mia_foto}
                  alt="Walter and the mountains"
              />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-walter-blue">Walter Zaninetti</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto font-bold text-center text-lg text-black sm:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-10  max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md bg-walter-light shadow-sm text-walter-blue sm:px-8"
                  >
                    Scopri di piu
                  </a>
                  <a
                      href="#"
                      className="flex items-center justify-center bg-walter-green px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-walter-light"
                  >
                    Segui su Twitch
                    <img alt="Twitch logo" src={twitch} className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
