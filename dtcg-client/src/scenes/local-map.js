import { Scene } from "phaser";
import { clickThing } from "../utils/click-thing";

export class LocalMap extends Scene {
  constructor(config) {
    super(config);
    this.io = config.io;
  }
  preload() {
    this.io.emit("haha", { from: "LocalMap" });
    this.load.image("crystal", "assets/crystal_t.png");
  }
  create() {
    clickThing(this, "From LocalMap", "crystal", "square-detail");
  }
}
