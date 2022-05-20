import React from "react";
import twitch from "../../static/icons/twitch.svg"
import {getRandomContent} from "../../variables/navbar/NavbarVariables";
import shuffle from "../../static/icons/shuffle.svg";

export default function CtaSection() {
  return (
    <div className="bg-walter-blue">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-4xl font-extrabold tracking-tight text-walter-light sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="-mb-1 pb-1 block text-walter-green">
            Get in touch or create an account.
          </span>
        </h2>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
          <div className="rounded-md shadow">
            <a
                href={getRandomContent()}
                className="flex items-center justify-center bg-walter-light font-bold px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black"
            >
              Contenuto casuale
              <img src={shuffle} className=" ml-3 w-5 h-5" alt=""/>
            </a>
          </div>
          <a
              href="https://www.twitch.tv/lord_lini"
              className="flex items-center justify-center bg-walter-green px-4 py-3 border font-bold border-transparent text-base font-medium rounded-md shadow-sm text-walter-light hover:bg-white hover:text-black"
          >
            Segui su Twitch
            <img alt="Twitch logo" src={twitch} className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
