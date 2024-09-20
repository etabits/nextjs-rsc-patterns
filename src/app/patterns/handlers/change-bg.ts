"use client";

import type { MouseEventHandler } from "react";

export const changePageBackground: MouseEventHandler = (e) =>
  // Instead of this dance we can directly assign target element bg color!
  // no need for datasets in this case
  (document.body.style.backgroundColor = `hsl(${
    (e.target as HTMLElement).dataset["hue"]
  } 30% 50%)`);
