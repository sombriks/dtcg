import { Scene } from "phaser";
import { clickThing } from "../utils/click-thing";

export class SquareDetail extends Scene {
  constructor(config) {
    super(config);
    this.io = config.io;
  }
  preload() {
    this.io.emit("haha", { from: "SquareDetail" });
    this.load.image("gear", "assets/images/gear_t.png");
  }
  create() {
    clickThing(this, "From SquareDetail", "gear", "lobby");
  }
}
