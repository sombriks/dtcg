import express from "express";
import socketIO from "socket.io";
import http from "http";

const app = express();
const server = http.Server(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

app.get("/status", (req, res) => res.send("ONLINE"));

io.on("connection", (socket) => {
  console.log("connected: " + socket.id);
  socket.on("haha", (e) => {
    console.log(e);
  });
});

server.listen(process.env.PORT || 3000, ()=>{
  console.log("server online");
});
