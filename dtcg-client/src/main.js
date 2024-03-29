import Soc from "socket.io-client";
import Phaser from "phaser";
import { Lobby } from "./scenes/lobby";
import { BigMap } from "./scenes/big-map";
import { CardCollection } from "./scenes/card-collection";
import { Decks } from "./scenes/decks";
import { LocalMap } from "./scenes/local-map";
import { SquareDetail } from "./scenes/square-detail";
import { Battle } from "./scenes/battle";

const io = Soc(process.env.API_URL || "http://localhost:3000");

const lobby = new Lobby({ io, default: true, key: "lobby" });
const bigMap = new BigMap({ io, key: "big-map" });
const cardCollection = new CardCollection({ io, key: "card-collection" });
const decks = new Decks({ io, key: "decks" });
const localMap = new LocalMap({ io, key: "local-map" });
const squareDetail = new SquareDetail({ io, key: "square-detail" });
const battle = new Battle({ io, key: "battle" });

const game = new Phaser.Game({
  parent: document.getElementById("app"),
  type: Phaser.AUTO,
  scene: [localMap, lobby, bigMap, cardCollection, decks, squareDetail, battle],
  disableContextMenu: process.env.NODE_ENV != "development",
  scale: {
    mode: Phaser.Scale.ENVELOP,
    parent: "app",
    width: 480,
    height: 480,
    min: {
      width: 320,
      height: 320
    },
    max: {
        width: 800,
        height: 800
    }
  }
});

if (process.env.NODE_ENV == "development") window.game = game;
