"use client";

import { getIP } from "../rendered/ip";

export const tellIP = () => getIP().then((ip) => alert(`Your IP is:\n${ip}`));
