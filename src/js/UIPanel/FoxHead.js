import { createFrames } from '../createAnim';

export const createFoxHead = (resource, json, frameRate = 20) => {
  let FoxAnim = createFrames(resource.texture.baseTexture, json, frameRate);
  let Fox = new PIXI.extras.AnimatedSprite(FoxAnim);
  Fox.x = -100;
  Fox.y = -105;
  Fox.animationSpeed = 0.4;
  return Fox;
}