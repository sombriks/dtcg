import { Scene } from "phaser";
import { clickThing } from "../utils/click-thing";

export class CardCollection extends Scene {
  constructor(config) {
    super(config);
    this.io = config.io;
  }
  preload(){
    this.io.emit("haha",{from:"CardCollection"})
    this.load.image("location", "assets/images/location_t.png");
  }
  create() {
    clickThing(this, "From CardCollection", "location", "decks");
  }
}
