import { animate } from "@motionone/dom";

export function runMotion() {
  const box = document.querySelector("#about");
  if (box) {
    animate(box, { x: 200, rotate: 360, opacity: [0, 1] }, { duration: 2 });
  }
}

