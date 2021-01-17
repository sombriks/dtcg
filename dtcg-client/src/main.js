import Soc from "socket.io-client";
import Phaser from "phaser";

const io = Soc(process.env.API_URL || "http://localhost:3000");
console.log(io);

setTimeout(() => {
  io.emit("haha", { haha: true });
}, 1000);

console.log("teste2");

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: function () {},
    create: function () {},
    update: function () {},
  },
  disableContextMenu: true,
});
