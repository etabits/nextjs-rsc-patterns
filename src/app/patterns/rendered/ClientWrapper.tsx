"use client";
import {
  useCallback,
  useEffect,
  useState,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import { getIP } from "./ip";

const ClientWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState("...");
  const onMouseMove = useCallback<MouseEventHandler>(
    (e) => setMousePosition(`${e.pageX},${e.pageY}`),
    []
  );

  const [clientIP, setClientIP] = useState("...");
  useEffect(() => void getIP().then(setClientIP), []);

  return (
    <div
      onMouseMove={onMouseMove}
      style={{
        marginTop: "24px",
        border: "2px solid #ccc",
        padding: "8px",
      }}
    >
      <div>Mouse Position: {mousePosition}</div>
      {children}
      <div>Client IP: {clientIP}</div>
    </div>
  );
};

export default ClientWrapper;
