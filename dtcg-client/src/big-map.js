import { Scene } from "phaser";

export class BigMap extends Scene {
  constructor(config) {
    super(config);
    this.io = config.io;
  }
  preload(){
    this.io.emit("haha",{from:"BigMap"})
  }
}
