import { dust } from '../initPlugins';
import { app } from '..'

export const particleStream = (res, container) =>
  dust.emitter(
    40,
    () => dust.create(
      290, 220,
      () => new PIXI.Sprite(
        res.blueparticle.texture),
      container,
      10,
      0,
      false,
      0, 6.28,
      2, 30,
      0.9, 1,
      0.001, 0.001,                          //Min/max scale speed 
      0.035, 0.04,                          //Min/max alpha speed
      0.05, 0.1
    )
  );
