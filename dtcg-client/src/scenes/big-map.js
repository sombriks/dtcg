import { Scene } from "phaser";
import { clickThing } from "../utils/click-thing";

export class BigMap extends Scene {
  constructor(config) {
    super(config);
    this.io = config.io;
  }
  preload() {
    this.io.emit("haha", { from: "BigMap" });
    this.load.image("magnifier", "assets/magnifier_t.png");
  }
  create() {
    clickThing(this, "From BigMap", "magnifier", "card-collection");
  }
}
