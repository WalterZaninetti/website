import gameController from "../../static/icons/game-controller.svg";
import internet from "../../static/icons/internet.svg";
import development from "../../static/icons/development.svg";
import season from "../../static/icons/season.svg";
import nature from "../../static/icons/nature.svg";
import sport from "../../static/icons/sports.svg";
import management from "../../static/icons/project-management.svg";
import blog from "../../static/icons/blogging.svg";
import {
    BriefcaseIcon,
    GlobeAltIcon,
    InformationCircleIcon,
    OfficeBuildingIcon,
    UserGroupIcon
} from "@heroicons/react/solid";

export const contents = [
    {
        name: "Development",
        description:
            "Get a better understanding of where your traffic is coming from.",
        href: "/dev",
        icon: development,
    },
    {
        name: "Gaming",
        description: "Speak directly to your customers in a more meaningful way.",
        href: "/gaming",
        icon: gameController,
    },
    {
        name: "Nature",
        description: "Your customers' data will be safe and secure.",
        href: "/nature",
        icon: nature,
    },
];

export const mobile_contents = [
    {
        name: "Development",
        description:
            "Get a better understanding of where your traffic is coming from.",
        href: "/dev",
        icon: development,
    },
    {
        name: "Gaming",
        description: "Speak directly to your customers in a more meaningful way.",
        href: "/gaming",
        icon: gameController,
    },
    {
        name: "Nature",
        description: "Your customers' data will be safe and secure.",
        href: "/nature",
        icon: nature,
    },
    // {
    //     name: "Talks",
    //     description: "Connect with third-party tools that you're already using.",
    //     href: "#",
    //     icon: conversation,
    // },
    {
        name: "Progetti",
        description: "Connect with third-party tools that you're already using.",
        href: "#",
        icon: management,
    },
    {
        name: "Websites",
        description: "Connect with third-party tools that you're already using.",
        href: "/websites",
        icon: internet,
    },
];


export const projects = [
    {
        name: "Braver",
        description:
            "Get a better understanding of where your traffic is coming from.",
        href: "/braver",
        icon: sport,
    },
    {
        name: "Seasonable",
        description: "Speak directly to your customers in a more meaningful way.",
        href: "/seasonable",
        icon: season,
    },
    {
        name: "Websites",
        description: "Your customers' data will be safe and secure.",
        href: "/websites",
        icon: internet,
    },
];
export const company = [
    { name: "Dev tutorial", href: "#", icon: InformationCircleIcon },
    { name: "Musica", href: "#", icon: OfficeBuildingIcon },
    { name: "Sport", href: "#", icon: BriefcaseIcon },
];
export const resources = [
    { name: "Musica", href: "#", icon: UserGroupIcon },
    { name: "Giardinaggio", href: "#", icon: UserGroupIcon },
    { name: "Altro", href: "#", icon: GlobeAltIcon },
];
export const blogPosts = [
    {
        id: 1,
        name: "Boost your conversion rate",
        href: "#",
        preview:
            "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
        imageUrl:
            "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
    },
    {
        id: 2,
        name: "Boost your conversion rate",
        href: "#",
        preview:
            "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
        imageUrl:
            "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
    },

];


export function getRandomContent(){
    const contents  = ['/dev','/nature','/gaming','/seasonable','/websites' , '/braver'];
    return contents[Math.floor(Math.random() * contents.length)];
}