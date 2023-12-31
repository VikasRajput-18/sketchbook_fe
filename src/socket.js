import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production"
    ? "https://sketchbook.onrender.com/"
    : "http://localhost:8000";

export const socket = io(URL);
