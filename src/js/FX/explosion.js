import { dust } from '../initPlugins';

export const explosion = (res) => {
  dust.create(
    128,
    128,
    () => new PIXI.Sprite(
      res.particle.texture
    ),
    app.stage,
    2000
  );
}
