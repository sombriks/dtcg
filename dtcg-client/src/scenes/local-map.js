import { Scene } from "phaser";
import { clickThing } from "../utils/click-thing";

export class LocalMap extends Scene {
  constructor(config) {
    super(config);
    this.io = config.io;
  }
  preload() {
    this.io.emit("haha", { from: "LocalMap" });
    this.load.image("crystal", "assets/images/crystal_t.png");
    this.load.image("natural", "assets/images/natural.png");
    this.load.tilemapTiledJSON("map-1", "assets/maps/map-1.json");
  }
  create() {
    const map = this.make.tilemap({ key: "map-1" });
    const tileset = map.addTilesetImage("tileset-1", "natural");
    const grama = map.createLayer('Camada de Tiles 1', tileset, 0, 0);
    const arvores = map.createLayer('Camada de Tiles 2', tileset, 0, 0);
    clickThing(this, "From LocalMap", "crystal", "square-detail");
  }
}
