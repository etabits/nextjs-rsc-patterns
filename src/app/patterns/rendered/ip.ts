export const getIP = () =>
  fetch("https://ifconfig.me/ip").then((r) => r.text());
