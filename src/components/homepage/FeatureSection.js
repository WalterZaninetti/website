
import nature from "../../static/photos/nature.jpg"
import blog from "../../static/icons/blogging.svg"
import {getRandomLogoForFeatureContent, getRandomLogoForProjects} from "../../util/RandomUtil";
const supportLinks = [
  {
    name: 'Twitch',
    href: '#',
    description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: getRandomLogoForFeatureContent(),
  },
  {
    name: 'Progetti',
    href: '#',
    description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: getRandomLogoForProjects(),
  },
  {
    name: 'Blog ed articoli',
    href: '#',
    description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: blog,
  },
]

export default function FeatureSection() {
  return (
      <div className="bg-walter-light">
        <div className="relative pb-32 bg-gray-800">
          <div className="absolute inset-0">
            <img
                className="w-full h-full object-cover"
                src={nature}
                alt=""
            />
            <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-walter-light md:text-5xl lg:text-6xl">Contenuti</h1>
            <p className="mt-6 max-w-3xl text-xl text-walter-light">
              Seguimi su Twitch o supportami su Patreon
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
            className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
            aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Cosa troverai
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
                <div key={link.name} className="flex flex-col bg-walter-blue rounded-2xl shadow-xl">
                  <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                    <div className="absolute top-0 p-4 inline-block bg-walter-green rounded-xl shadow-lg transform -translate-y-1/2">
                      <img alt="popo" src={link.icon} className="h-12 w-12 text-walter-light" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-medium text-walter-light">{link.name}</h3>
                    <p className="mt-4 text-base text-walter-light">{link.description}</p>
                  </div>
                  <div className="p-6 bg-walter-green rounded-bl-2xl text-center lg:text-left rounded-br-2xl md:px-8">
                    <a href={link.href} className="text-base font-medium text-walter-light">
                      Scopri di piu<span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
            ))}
          </div>
        </section>
      </div>
  )
}
