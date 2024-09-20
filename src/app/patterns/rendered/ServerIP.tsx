import { getIP } from "./ip";

const ServerIP = () => getIP().then((ip) => `Server IP: ${ip}`);

export default ServerIP;
