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

import artudorme from "../static/photos/artudorme.jpg";
import io from "../static/photos/io.jpg";
import nonna from "../static/photos/nonna.jpg";
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
      image: nonna,
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
