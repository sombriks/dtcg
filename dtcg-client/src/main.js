import Soc from "socket.io-client";
import Phaser from "phaser";
import { Lobby } from "./lobby";
import { BigMap } from "./big-map";
import { CardCollection } from "./card-collection";
import { Decks } from "./decks";
import { LocalMap } from "./local-map";
import { SquareDetail } from "./square-detail";
import { Battle } from "./battle";

const io = Soc(process.env.API_URL || "http://localhost:3000");

setTimeout(() => {
  io.emit("haha", { haha: true });
}, 1000);

window.game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [
    new Lobby(),
    new BigMap(),
    new CardCollection(),
    new Decks(),
    new LocalMap(),
    new SquareDetail(),
    new Battle()
  ],
  disableContextMenu: process.env.NODE_ENV != "development",
});

