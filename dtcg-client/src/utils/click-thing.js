// temp thing
export const clickThing = (scn, msg, asset, key) => {
  const button = scn.add.sprite(
    scn.cameras.main.width / 2,
    scn.cameras.main.height / 2,
    asset
  );
  button.setInteractive();
  button.setScale(0.1, 0.1);
  button.setOrigin(0.5, 0.5);
  button.on("pointerup", (e) => {
    console.log(msg);
    scn.io.emit("haha", { from: msg });
    scn.scene.start(key);
  });
};
