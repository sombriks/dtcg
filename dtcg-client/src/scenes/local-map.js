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
    this.load.image("border", "assets/images/AD_VisualInventory_Border07.png");
  }
  create() {
    const map = this.make.tilemap({ key: "map-1" });
    const tileset = map.addTilesetImage("tileset-1", "natural");
    const grama = map.createLayer("Camada de Tiles 1", tileset, 0, 0);
    const arvores = map.createLayer("Camada de Tiles 2", tileset, 0, 0);
    const seletor = this.add.sprite(152, 56, "border");
    this.cameras.main.startFollow(seletor);
    this.cameras.main.setBounds(0, 0, grama.width, grama.height);
    // seletor.setScale(0.0625, 0.0625);
    this.input.on("pointerup", (p) => {
      const { worldX, worldY } = p;
      const targetVec = grama.worldToTileXY(worldX, worldY);
      const tile = grama.getTileAt(targetVec.x, targetVec.y);
      this.tweens.add({
        targets: seletor,
        x: tile.pixelX + 8,
        y: tile.pixelY + 8,
        ease: 'Power2',
        duration: 500,
      });
    });
    this.events.on("shutdown", (e) => this.input.off("pointerup"));
  }
}
