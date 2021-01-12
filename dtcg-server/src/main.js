import express from "express";
import socketIO from "socket.io";
import http from "http";

const app = express();
const server = http.Server(app);
const io = socketIO(server);

