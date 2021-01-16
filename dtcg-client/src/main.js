import Soc from "socket.io-client";

const io = Soc(process.env.API_URL || "http://localhost:3000");
console.log(io);

setTimeout(() => {
  io.emit("haha", { haha: true });
}, 1000);

console.log("teste2");
