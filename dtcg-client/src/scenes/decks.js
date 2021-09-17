import { Scene } from "phaser";
import { clickThing } from "../utils/click-thing";

export class Decks extends Scene {
  constructor(config) {
    super(config);
    this.io = config.io;
  }
  preload() {
    this.io.emit("haha", { from: "Decks" });
    this.load.image("fix", "assets/fix_t.png");
  }
  create() {
    clickThing(this, "From Decks", "fix", "local-map");
  }
}
