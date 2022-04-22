import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import classNames from "../../../util/ClassNamesFunction";

export default function MenuNavbarWithoutBlog({ contents , label }) {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-walter-blue" : "text-black",
              "group rounded-md inline-flex items-center text-base font-medium"
            )}
          >
            <span>{label}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-walter-blue" : "text-black",
                "ml-2 h-5 w-5"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-walter-light">
              <div className={contents.length === 4 ? "max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16" : "max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-3 lg:px-8 lg:py-10 xl:py-12"}>
                {contents.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 p-3 flex flex-col hover:bg-blue-500 hover:text-white justify-between rounded-lg"
                  >
                    <div className="flex md:h-full lg:flex-col">
                      <div className="flex-shrink-0 flex justify-center">
                        <span className="inline-flex items-center justify-center h-10 w-10 rounded-md text-white sm:h-20 sm:w-20">
                          <img src={item.icon} alt={item.name} className="h-16 w-16" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                        <div>
                          <p className="text-base font-medium text-center">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm text-center">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
