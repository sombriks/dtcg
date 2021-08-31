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

const lobby = new Lobby({ io, default: true });
const bigMap = new BigMap({ io });
const cardCollection = new CardCollection({ io });
const decks = new Decks({ io });
const localMap = new LocalMap({ io });
const squareDetail = new SquareDetail({ io });
const battle = new Battle({ io });

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  scene: [bigMap, cardCollection, decks, localMap, squareDetail, battle, lobby],
  disableContextMenu: process.env.NODE_ENV != "development",
});

if(process.env.NODE_ENV == "development") window.game = game;
