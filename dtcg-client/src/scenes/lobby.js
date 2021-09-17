import { Scene } from "phaser";
import { clickThing } from "../utils/click-thing";

export class Lobby extends Scene {
  constructor(config) {
    super(config);
    this.io = config.io;
  }
  preload() {
    this.io.emit("haha", { from: "Lobby" });
    this.load.image("lamp", "assets/lamp_t.png");
  }
  create() {
    clickThing(this, "From lobby", "lamp", "big-map");
  }
}
