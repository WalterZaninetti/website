import hat from "../static/icons/hat.svg";
import park from "../static/icons/park.svg";
import coding from "../static/icons/coding.svg";
import joystick from "../static/icons/joystick.svg";

import season from "../static/icons/season.svg";
import development from "../static/icons/development.svg";
import conversation from "../static/icons/conversation.svg";
import sports from "../static/icons/sports.svg";
import controller from "../static/icons/game-controller.svg";
import nature from "../static/icons/nature.svg";
import project from "../static/icons/project-management.svg";

import svg1 from "../static/icons/ideas.svg";
import svg2 from "../static/icons/coder.svg";
import svg3 from "../static/icons/homescreen.svg";
import svg4 from "../static/icons/moon.svg";
import svg5 from "../static/icons/firmware.svg";

import artudorme from "../static/photos/artudorme.jpg";
import io from "../static/photos/io.jpg";
import iofrapisolo from "../static/photos/iofrapisolo.jpg";
import iofrapisolo2 from "../static/photos/iofrapisolo2.jpg";
import pisa from "../static/photos/pisa.jpg";
import mebirra from "../static/photos/me-birra.jpg";
import ioenoah from "../static/photos/ioenoah.jpg";

export function getRandomLogo() {
  const logos = [hat, park, coding, joystick];
  return logos[Math.floor(Math.random() * logos.length)];
}

export function getRandomLogoForFeatureContent(){
  const logos = [nature, development, conversation, controller];
  return logos[Math.floor(Math.random() * logos.length)];
}

export function getRandomLogoForProjects(){
  const logos = [season, sports,project ];
  return logos[Math.floor(Math.random() * logos.length)];
}

export function getRandomImage() {
  const images = [
    {
      image: artudorme,
      title: "Artu Dorme",
    },
    {
      image: io,
      title: "Mia foto",
    },
    {
      image: iofrapisolo,
      title: "Io e la nonna",
    },
    {
      image: iofrapisolo2,
      title: "Io e la nonna",
    },
    {
      image: pisa,
      title: "Io e francesca a Pisa",
    },
    {
      image: mebirra,
      title: "Io che scelgo una birra",
    },
    {
      image: ioenoah,
      title: "Io e Noah",
    },
  ];
  return images[Math.floor(Math.random() * images.length)];
}

export function getRandomSvgHero() {
  const svgs = [
    {
      image: svg1,
      animation: "Artu Dorme",
    },
    {
      image: svg2,
      animation: "Artu Dorme",
    },
    {
      image: svg3,
      animation: "Artu Dorme",
    },
    {
      image: svg4,
      animation: "Artu Dorme",
    },
    {
      image: svg5,
      animation: "Artu Dorme",
    },
  ];
  return svgs[Math.floor(Math.random() * svgs.length)];
}
