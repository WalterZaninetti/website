import React, {Fragment} from "react";
import {Popover, Transition} from "@headlessui/react";
import {MenuIcon, XIcon,} from "@heroicons/react/outline";
import shuffle from "../../../static/icons/shuffle.svg";
import MenuNavbarWithoutBlog from "./MenuNavbarWithoutBlog";
import {contents, getRandomContent, mobile_contents, projects} from "../../../variables/navbar/NavbarVariables";
import {getRandomLogo} from "../../../util/RandomUtil";
import SpotifyBanner from "../../SpotifyBanner";
export default function NavigatorBar() {

  return (
    <Popover className="relative bg-walter-light">
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="w-full mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-12 md:justify-center md:space-x-10">
          <div>
            <a href="/" className="flex">
              <span className="sr-only">Workflow</span>
              <img className="h-16 w-auto sm:h-20" src={getRandomLogo()} alt="" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-walter-light rounded-md p-2 inline-flex items-center justify-center text-black">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-center">
            <Popover.Group as="nav" className="flex space-x-10">
              <MenuNavbarWithoutBlog contents={contents} label="Contenuti"/>
              <MenuNavbarWithoutBlog contents={projects} label="Progetti"/>
              {/*<MenuNavbarWithBlogPost blogPosts={blogPosts} company={company} resources={resources} />*/}
            </Popover.Group>
          </div>
          <div className="hidden md:flex md:items-center md:justify-start rounded-2xl">
               <SpotifyBanner/>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-walter-light divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-12 w-auto"
                    src={getRandomLogo()}
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-black">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {mobile_contents.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center p-3 rounded-lg hover:bg-blue-500 hover:text-white"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-walter-light text-white sm:h-16 sm:w-16">
                          <img alt={item.name} src={item.icon} className="h-8 w-8" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-4 py-4 text-base rounded-md flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white">
                    <a
                      href={getRandomContent()}
                      className="font-bold text-lg px-3"
                    >
                      Contenuto casuale
                    </a>
                    <img src={shuffle} className="w-5 h-5" alt=""/>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
