"use client";

import type { MouseEventHandler } from "react";

export const incrementMe: MouseEventHandler = (e) => {
  const element = e.target as HTMLElement;
  const incrementBy = parseInt(element.dataset["incrementBy"] ?? "1");
  const currentValue = parseInt(element.innerText);
  const newValue = currentValue + incrementBy;
  if (currentValue < 100 && newValue > 100)
    setTimeout(() => alert("You crossed the 100 boundary!"), 2e2);
  element.innerText = newValue.toString();
};
