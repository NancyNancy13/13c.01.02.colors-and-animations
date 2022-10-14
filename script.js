"use strict";
// Change theme to dark by adding the `dark` classname to html element.

const icon = document.querySelector("#icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "graphics/sun.png";
  } else {
    icon.src = "graphics/moon.png";
  }
};

import { animate } from "https://cdn.skypack.dev/motion";

animate("object", { rotate: 360 }, { duration: 2, direction: "alternate", repeat: Infinity });
animate("h2", { translateX: 50 }, { duration: 2, direction: "alternate", repeat: Infinity });
animate("button", { scale: 1.1 }, { duration: 2, direction: "alternate", repeat: Infinity });
