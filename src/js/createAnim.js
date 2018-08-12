export const createFrames = (baseTexture, json, length) => {
  const sheet = new PIXI.Spritesheet(baseTexture, json);
  let frames = [];
  sheet.parse(() => {
    let sheetArray = Array.from({ length: length }, (v, i) => i);
    frames = sheetArray.map(i => {
      return PIXI.Texture.fromFrame(sheet._frameKeys[i]);
    })
  });
  return frames;
}