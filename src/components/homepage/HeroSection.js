import React from "react";
import mia_foto from "../../static/photos/bannerweb.jpg"
import twitch from "../../static/icons/twitch.svg";
import {getRandomQuote} from "../../variables/HomeVariables"
import {getRandomContent} from "../../variables/navbar/NavbarVariables";
import {getRandomImage, getRandomSvgHero} from "../../util/RandomUtil";
import shuffle from "../../static/icons/shuffle.svg";
export default function HeroSection() {
  const quote = getRandomQuote();
  const image = getRandomSvgHero();
  return (

      <main className="lg:relative bg-walter-blue">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-center text-walter-green sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Walter Zaninetti</span>{' '}
            </h1>
            <p className="mt-3 max-w-md text-center mx-auto italic text-xl text-walter-light sm:text-2xl md:mt-5 md:max-w-3xl">
              {quote.text}
            </p>
            <p className="mt-3 text-center max-w-md mx-auto font-extrabold text-xl text-walter-green sm:text-2xl md:mt-5 md:max-w-3xl">
              {quote.author}
            </p>
            <div className="mt-10 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <a
                    href={getRandomContent()}
                    className="flex items-center justify-center bg-walter-light font-bold px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black"
                >
                  Contenuto casuale
                  <img src={shuffle} className=" ml-3 w-5 h-5" alt=""/>
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                    href="https://www.twitch.tv/lord_lini"
                    className="flex items-center justify-center bg-walter-green font-bold px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-walter-light hover:bg-white hover:text-black"
                >
                  Segui su Twitch
                  <img alt="Twitch logo" src={twitch} className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 bg-walter-green md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
              className="absolute inset-0 w-full h-full p-4"
              src={image.image}
              alt=""
          />
        </div>
      </main>
  );
}
